import { Logger } from '../../../utils/Logger';
import { VariablesStorage } from '../../../utils/storage/ChromeStorage';

export class KeyboardTracker {
  private experimentID: number | null = null;
  private logger: Logger = new Logger('[KeyboardTracker]', false);
  private static instance: KeyboardTracker | null = null;

  public static getInstance = () => {
    if (!KeyboardTracker.instance) {
      KeyboardTracker.instance = new KeyboardTracker();
    }
    return KeyboardTracker.instance;
  };

  public init = async (): Promise<void> => {
    this.experimentID = await VariablesStorage.getItem('experimentID');
    window.onkeydown = this.handleKeyDown.bind(this);
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    console.log(e);
  };
}
