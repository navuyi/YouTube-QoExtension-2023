import { Audio } from "./Audio"
import { Video } from "./Video"

export class Player{
    
    private video : Video
    private audio : Audio

    constructor(){
        this.audio = new Audio()
        this.video = new Video(this.audio)
    }

    public mount = (container:HTMLElement) => {
        this.video.setSource("https://rr1---sn-2pvopxg-2v1s.googlevideo.com/videoplayback?expire=1685727081&ei=CdN5ZKvbCI2HyQWOlLmYDg&ip=2001%3A6d8%3A10%3Aa00e%3A98a1%3Ad449%3A775e%3A248&id=o-AJ3uAvwoHFaMWjVqepoXY83exoDIR0fywl4qiS9E9Zaw&itag=248&source=youtube&requiressl=yes&mh=qy&mm=31%2C29&mn=sn-2pvopxg-2v1s%2Csn-f5f7lnl6&ms=au%2Crdu&mv=m&mvi=1&pl=32&initcwndbps=1140000&spc=qEK7B2g9UdiZmU2IsHxYspHliwrmg04&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=911193002&dur=5001.800&lmt=1631714507189379&mt=1685705117&fvip=2&keepalive=yes&fexp=24007246%2C24363392%2C51000011&c=ANDROID&txp=5516222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgBiibixkONWdLE2XiTwUaJMpXKtGZc72gPwhsn7JRwywCIQCwCZ6Ncozg8xRe9SWqbw9VTjmy2ZSVtXoM8TGQhLux6Q%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAOywpXDMNUIEjflY7bvAdAfJtX3dIFCP3CNzmbVJ0h94AiA29aki0WEOAIo5CRF0YzzRXYZuhhka26r3ncnOXqyLyA%3D%3D")
        this.audio.setSource("https://rr1---sn-2pvopxg-2v1s.googlevideo.com/videoplayback?expire=1685727081&ei=CdN5ZKvbCI2HyQWOlLmYDg&ip=2001%3A6d8%3A10%3Aa00e%3A98a1%3Ad449%3A775e%3A248&id=o-AJ3uAvwoHFaMWjVqepoXY83exoDIR0fywl4qiS9E9Zaw&itag=251&source=youtube&requiressl=yes&mh=qy&mm=31%2C29&mn=sn-2pvopxg-2v1s%2Csn-f5f7lnl6&ms=au%2Crdu&mv=m&mvi=1&pl=32&initcwndbps=1140000&spc=qEK7B2g9UdiZmU2IsHxYspHliwrmg04&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=63199616&dur=5001.821&lmt=1631812901100043&mt=1685705117&fvip=2&keepalive=yes&fexp=24007246%2C24363392%2C51000011&c=ANDROID&txp=5511222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgQPyKLmBfWZcgB6XdawQzxfun0o-yww8Je28KTSRAqjUCIQDGIWbXIWm5uB42SrrhqTFVu6JCHQTc8tsggA2qAe7hNg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAOywpXDMNUIEjflY7bvAdAfJtX3dIFCP3CNzmbVJ0h94AiA29aki0WEOAIo5CRF0YzzRXYZuhhka26r3ncnOXqyLyA%3D%3D")
        this.audio.mount(this.video.getElement() as HTMLVideoElement)
        this.video.mount(container)
    }

    public reset = () : void => {
        this.video.seek(0)
        this.audio.seek(0)
    }
}