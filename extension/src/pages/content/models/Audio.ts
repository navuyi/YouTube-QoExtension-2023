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

    public mute = () : void => {
            this.element.muted ? null : this.element.muted = true
    }

    public setVolume = (value:number) => {
        if(value < 0 || value > 1) throw Error("Volume value must be between 0 and 1 inclusive");
        this.element.volume = value
    }
}