import { MediaElement } from "./MediaElement"

export class Audio extends MediaElement{
   
    public constructor(){
        super("audio")

        this.element.id = "custom-audio"


        this.element.autoplay = true
        this.element.controls = true
        this.element.volume = 1
    }


    mount = (video: HTMLVideoElement) => {
        video.appendChild(this.element)
    }
}