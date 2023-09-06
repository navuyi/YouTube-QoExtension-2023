import { api } from '../../../API/api'
import { Logger } from '../../../utils/Logger'
import { VariablesStorage } from '../../../utils/storage/ChromeStorage'

export class KeyboardTracker {
  private experimentID: number | null = null
  private logger: Logger = new Logger('[KeyboardTracker]', true)
  private static instance: KeyboardTracker | null = null

  public static getInstance = () => {
    if (!KeyboardTracker.instance) {
      KeyboardTracker.instance = new KeyboardTracker()
    }
    return KeyboardTracker.instance
  }

  public init = async (): Promise<void> => {
    this.experimentID = await VariablesStorage.getItem('experimentID')
    window.onkeydown = (event: KeyboardEvent) => this.handleKeyEvent(event)
    window.onkeyup = (event: KeyboardEvent) => this.handleKeyEvent(event)
  }

  private handleKeyEvent = async (e: KeyboardEvent) => {
    const evt = {
      type: e.type,
      experimentID: this.experimentID,
      altKey: e.altKey,
      shiftKey: e.shiftKey,
      ctrlKey: e.ctrlKey,
      key: e.key,
      timestamp: new Date().toISOString(),
      repeat: e.repeat,
    }
    try {
      api.keyboardEvent.post(evt)
    } catch (err) {
      console.log('Error sending keyboard event')
    }
  }
}
