import { MediaElement } from "./MediaElement"

export class Audio extends MediaElement{
    private static instance : Audio
    

    private constructor(){
        super("audio")
        
        this.element.id = "custom-audio"

        this.element.autoplay = true
        this.element.controls = true
    }

    public static getInstance = () => {
        if(!Audio.instance) {
            Audio.instance = new Audio()
        }
        return Audio.instance
    }

    mount = (video: HTMLVideoElement) => {
        video.appendChild(this.element)
    }
}