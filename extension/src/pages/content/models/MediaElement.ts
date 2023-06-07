


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

    public play = () => {
        this.element.play()
    }
    public pause = () => {
        this.element.pause()
    }
    public getCurrentTime = () : number => {
        return this.element.currentTime
    }
    public isPaused = () : boolean => {
        return this.element.paused
    }
    public getReadyState = () : number => {
        return this.element.readyState
    }
    public getBuffered = () : TimeRanges => {
        return this.element.buffered
    }
    public load = () : void => {
        this.element.load()
    }
    public isMounted = () : boolean => {
        return document.contains(this.element)
    }
}