import { MediaElement } from "./MediaElement"

export class Audio extends MediaElement{
   
    public constructor(autoplay:boolean = true){
        super("audio")

        this.element.id = "custom-audio"

        this.element.autoplay = autoplay
        this.element.controls = true
        this.element.volume = 1

        this.element.style.display = "none"
    }
}