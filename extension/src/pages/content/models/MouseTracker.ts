

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
        }
        else if(e.type === "mouseup" && e.button === 0) {
            this.leftButtonPressed = false;
        }
    }

    private handleMouseMove = (e:MouseEvent) => {
        if(this.leftButtonPressed === true){
            console.log("mouse drag")
        }else{
            console.log("mouse move")
        }
    }
}