import { Logger } from "@src/utils/Logger"
import { DebugDataChunk } from "@src/types/debugData.type"
import { DebugDataElements } from "@src/types/debugData.type"


const HtmlQueryElements = {
    video: "video", // <-- tag
    playerContextMenuButton: ".ytp-menuitem", // <-- class
    playerDebugDataContainer: ".html5-video-info-panel", // <-- class
    playerDebugDataContent: ".html5-video-info-panel-content" // <-- class
}

export class DebugDataMonitor {
    private logger : Logger = new Logger("[NetworkThrottler]")
    private debugDataElements : DebugDataElements | null = null
    private interval : ReturnType<typeof setInterval> | null = null

    constructor() {}

    public init = () : void => {
        // Check if the debug stats are already opened
        const playerDebugDataContainer = document.querySelector(HtmlQueryElements.playerDebugDataContainer) as HTMLElement
        if(!playerDebugDataContainer){
            this.openDebugMenu()
            this.getDebugDataElements()
        }

        this.stop()
        this.start()
    }
    
    /**
     * Starts monitoring the debug data by periodically analyzing it.
     * @returns {void}
    */
    private start = () : void => {
        this.interval = setInterval(() => {
            this.analyze()
        }, 250)
    }

    public stop = () : void=> {
        if(this.interval){
            clearInterval(this.interval)
            this.interval = null    // <-- nulling the interval 
        }
    }

    private analyze = () => {
        if(!this.debugDataElements){
            throw new Error("Debug data elements not initialized")
        }
        const chunk : DebugDataChunk = {
            videoID: this.debugDataElements.videoIDsCPN.innerText.split("/")[0] || null,
            sCPN: this.debugDataElements.videoIDsCPN.innerText.split("/")[1] || null,
            viewport: this.debugDataElements.viewportFrames.innerText.split("/")[0] || null,
            droppedFrames: this.debugDataElements.viewportFrames.innerText.split("/")[1].split("dropped of")[0] || null,
            totalFrames: this.debugDataElements.viewportFrames.innerText.split("/")[1].split("dropped of")[1] || null,
            currentResolution: this.debugDataElements.currentOptimalRes.innerText.split("/")[0] || null,
            optimalResolution: this.debugDataElements.currentOptimalRes.innerText.split("/")[1] || null,
            volume: this.debugDataElements.volumeNormalized.innerText.split("/")[0] || null,
            normalizedVolume: this.debugDataElements.volumeNormalized.innerText.split("/")[1] || null,
            codecs: this.debugDataElements.codecs.innerText || null,
            color: this.debugDataElements.color.innerText || null,
            connectionSpeed: this.debugDataElements.connectionSpeed.innerText || null,
            networkActivity: this.debugDataElements.networkActivity.innerText || null,
            bufferHealth: this.debugDataElements.bufferHealth.innerText || null,
            mysteryText: this.debugDataElements.mysteryText.innerText || null,
            date: this.debugDataElements.date.innerText || null
        }
        for(const key in chunk){
            if(chunk[key]){
                chunk[key] = chunk[key].trimStart().trimEnd()
            }
        }
        console.log("Analyzing")
    }

    private getDebugDataElements = ()  => {
        const container = document.querySelector(HtmlQueryElements.playerDebugDataContent) as HTMLElement
        const content = container.children

        this.debugDataElements = {
            videoIDsCPN: content[0].querySelector("span") as HTMLSpanElement,
            viewportFrames: content[1].querySelector("span") as HTMLSpanElement,
            currentOptimalRes: content[2].querySelector("span") as HTMLSpanElement,
            volumeNormalized: content[3].querySelector("span") as HTMLSpanElement,
            codecs: content[4].querySelector("span") as HTMLSpanElement,
            color: content[6].querySelector("span") as HTMLSpanElement,
            connectionSpeed: content[8].querySelector("span")?.querySelectorAll("span")[1] as HTMLSpanElement,
            networkActivity: content[9].querySelector("span")?.querySelectorAll("span")[1] as HTMLSpanElement,
            bufferHealth: content[10].querySelector("span")?.querySelectorAll("span")[1] as HTMLSpanElement,
            mysteryText: content[14].querySelector("span") as HTMLSpanElement,
            date: content[16].querySelector("span") as HTMLSpanElement,
        }
    }

    private openDebugMenu = () : void => {
        // Opens player context menu
        const videoPlayer = document.querySelector(HtmlQueryElements.video); // select the video player element
        const contextMenuEvent = new MouseEvent('contextmenu', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        if(videoPlayer){
            videoPlayer.dispatchEvent(contextMenuEvent); // dispatch the contextmenu event on the video player element
        }

        // Clicks debug stats button
        const menuButtons = document.querySelectorAll(HtmlQueryElements.playerContextMenuButton); 
        const debugDataButton = menuButtons[menuButtons.length - 1] as HTMLElement
        debugDataButton.click() 
    }
}