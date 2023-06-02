import { Audio } from "./Audio"
import { MediaElement } from "./MediaElement"

export class Video extends MediaElement{
    private audio : Audio

    public constructor(audio:Audio){
        super("video")
        this.audio = audio
        this.element.id = "custom-video"

        this.element.autoplay = true
        this.element.controls = true
        this.element.style.width = "100%"

        this.element.onpause = this.handlePause
        this.element.onplay = this.handlePlay
        this.element.onseeking = this.handleSeeking
        this.element.onseeked = this.handleSeeked
        this.element.onwaiting = this.handleWaiting
    }

    mount = (container: HTMLElement) => {
        container.insertBefore(this.element, container.firstChild)
    }

    // Handle seeked is done
    private handleSeeked = () => {
        this.play()
    }
    // Handle started seeking
    private handleSeeking = () => {
        this.pause()
    }
    private handlePause = () => {
        this.audio.pause()
    }
    private handlePlay = () => {
        this.audioSync()
        this.audio.play()
    }
    /**
     * Method pauses playback if there is not enough video buffered.
     * Periodic checks are made if enough data is buffered to resume playback.
     * NOTE - different approach could be to
    */
    private handleWaiting = () => {
        this.pause()
        const interval = setInterval(() => {
            console.log(this.getReadyState())
            if(this.getReadyState() >= 4){
                this.play()
                clearInterval(interval)
            }
        }, 10)
    }
    

    private audioSync = () => {
        this.audio.seek(this.getCurrentTime())
    }
}