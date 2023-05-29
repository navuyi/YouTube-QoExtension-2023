


export class VideoPlayer {
    private static instance : VideoPlayer
    private htmlElement : HTMLVideoElement

    private constructor(){
        this.htmlElement = document.createElement("video")
        this.htmlElement.id = "custom-video-player"
       
        this.htmlElement.autoplay = true
        this.htmlElement.controls = false
        this.htmlElement.style.width = "100%"
    }

    public static getInstance = () => {
        if(!VideoPlayer.instance) {
            VideoPlayer.instance = new VideoPlayer()
        }
        return VideoPlayer.instance
    }
    
    public mount = (container: HTMLElement) => {
        container.insertBefore(this.htmlElement, container.firstChild)
    }
}