
export interface MouseEventData {
    x : number
    y : number
    pageX : number
    pageY : number
    screenX : number
    screenY : number
    offsetX : number
    offsetY : number

    type : CustomMouseEventType
    url: string
    timestamp : string
    
    element: {
        className : string
        tag: string
        id: string
        outerHTML: string 
        outerText: string 

        innerHTML: string 
        innerText: string 
        
        baseURI: string 
    }
}
export type CustomMouseEventType = "mousedown" | "mouseup" | "mousemove" | "drag"

export class MouseTracker{
    private static instance : MouseTracker | null = null
    private leftButtonPressed : boolean = false

    private constructor(){}

    public static getInstance = () => {
        if(!MouseTracker.instance){
            MouseTracker.instance = new MouseTracker()
        }
        return MouseTracker.instance
    }

    public init = () => {
        window.onmousedown = this.handleMousePressed.bind(this)
        window.onmouseup = this.handleMousePressed.bind(this)
        window.onmousemove = this.handleMouseMove.bind(this)
    }

    private handleMousePressed = (e:MouseEvent) => {
        if(e.type === "mousedown" && e.button === 0) {
            this.leftButtonPressed = true;
            this.handleMouseEvent(e, "mousedown")
        }
        else if(e.type === "mouseup" && e.button === 0) {
            this.leftButtonPressed = false;
            this.handleMouseEvent(e, "mouseup")
        }
    }

    private handleMouseMove = (e:MouseEvent) => {
        if(this.leftButtonPressed === true){
            this.handleMouseEvent(e, "drag")
        }else{
            this.handleMouseEvent(e, "mousemove")
        }
    }

    private handleMouseEvent = (e:MouseEvent, type:CustomMouseEventType) => {
        const target = e.target as HTMLElement
        const data : MouseEventData = {
            x: e.x,
            y: e.y,
            pageX: e.pageX,
            pageY: e.pageY,
            screenX: e.screenX,
            screenY: e.screenY,
            offsetX: e.offsetX,
            offsetY: e.offsetY,
            type: type,
            url: window.location.href,
            timestamp: new Date().toISOString(),
            element: {
                className: target.className,
                tag: target.tagName,
                id: target.id,
                outerHTML: target.outerHTML,
                outerText: target.outerText,
                innerHTML: target.innerHTML,
                innerText: target.innerText,
                baseURI: target.baseURI
            }
        }
    }
}