


export class PLayerUI {
    private element : HTMLDivElement
    private bar: HTMLDivElement
    private rewindButton : HTMLButtonElement
    private forwardButton : HTMLButtonElement 
    private pauseButton : HTMLButtonElement
    private playButton : HTMLButtonElement

    constructor(){
        this.element = document.createElement("div")
        this.bar = document.createElement("div")
        this.rewindButton = document.createElement("button"); this.rewindButton.innerText = "-10"
        this.forwardButton = document.createElement("button"); this.forwardButton.innerHTML = "+10"
        this.pauseButton = document.createElement("button"); this.pauseButton.innerText = "Pause"
        this.playButton = document.createElement("button"); this.playButton.innerText = "Play"
    }
}