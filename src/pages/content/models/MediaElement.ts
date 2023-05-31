


export abstract class MediaElement{
    protected element : HTMLVideoElement | HTMLAudioElement
    protected source : HTMLSourceElement
    
    constructor(tag: "video" | "audio"){
        this.element = document.createElement(tag)
        this.source = document.createElement("source")

        this.element.appendChild(this.source)
    }

    // Declarations
    public abstract mount(container: HTMLElement) : void

    // Implementations
    public getElement = () => {
        return this.element
    }

    public setSource = (src: string) => {
        this.source.src = src
    }
    public seek = (time: number) => {
        if(time > this.element.duration) return;
        this.element.currentTime = time
    }

}