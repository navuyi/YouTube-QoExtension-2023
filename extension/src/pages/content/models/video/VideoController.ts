
import { DebugDataMonitor } from "./DebugDataMonitor"
import { VideoEventsMonitor } from "./VideoEventsMonitor"

export class VideoController {
    private debugDataMonitor : DebugDataMonitor
    private videoEventsMonitor: VideoEventsMonitor

    constructor(){
        this.debugDataMonitor = new DebugDataMonitor()
        this.videoEventsMonitor = new VideoEventsMonitor()
    }

    public start = () : void => {
        this.debugDataMonitor.init()
        this.videoEventsMonitor.init()
    }

    public stop = () : void => {
        this.debugDataMonitor.stop()
        this.videoEventsMonitor.stop()
    }
}