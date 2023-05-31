import { MediaElement } from "./MediaElement"

export class Video extends MediaElement{
    private static instance : Video

    private constructor(){
        super("video")

        this.element.id = "custom-video"

        this.element.autoplay = true
        this.element.controls = false
        this.element.style.width = "100%"
    }

    public static getInstance = () => {
        if(!Video.instance) {
            Video.instance = new Video()
        }
        return Video.instance
    }
    
    mount = (container: HTMLElement) => {
        container.insertBefore(this.element, container.firstChild)
    }
}