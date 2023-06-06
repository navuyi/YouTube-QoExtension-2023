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
        this.video.setSource("https://rr4---sn-f5f7lnld.googlevideo.com/videoplayback?expire=1685760449&ei=YVV6ZP7qAteMyAWcv7qYBg&ip=89.70.50.94&id=o-AP7TBZ2x1BXz0eTd4ClTT8a6I0XIHfPNJRzPH7ZvPsm1&itag=248&source=youtube&requiressl=yes&hcs=ir%2C&mh=1r&mm=31%2C26&mn=sn-f5f7lnld%2Csn-4g5ednde&ms=au%2Conr&mv=m&mvi=4&pl=18&rmhost=rr3---sn-f5f7lnld.googlevideo.com%2C&initcwndbps=2130000&spc=qEK7BxJFfMfjbxZEfzsKnu5MLkvwBFw&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=621691362&dur=3938.166&lmt=1685725946521145&mt=1685738480&fvip=1&keepalive=yes&fexp=24007246%2C51000024&c=ANDROID&txp=3319224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAJAmE5LrzyydQLRgpyU3tCc4JLlucP3TXEva0mjnm2KRAiBdkkYwM7u_XMNWd1ADU-4PlArkmTNFFl0FEluS_HBPjw%3D%3D&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crmhost%2Cinitcwndbps&lsig=AG3C_xAwRQIgLpmSQANd6O_OJVsc5k2c17BcfHqhiaqSGowWTZ7strgCIQC_FbkYB7y015F8GDpoUzD6xkQqWdpRRnaZ3Zp3Ng-PZA%3D%3D")
        this.audio.setSource("https://rr4---sn-f5f7lnld.googlevideo.com/videoplayback?expire=1685760449&ei=YVV6ZP7qAteMyAWcv7qYBg&ip=89.70.50.94&id=o-AP7TBZ2x1BXz0eTd4ClTT8a6I0XIHfPNJRzPH7ZvPsm1&itag=251&source=youtube&requiressl=yes&hcs=ir%2C&mh=1r&mm=31%2C26&mn=sn-f5f7lnld%2Csn-4g5ednde&ms=au%2Conr&mv=m&mvi=4&pl=18&rmhost=rr3---sn-f5f7lnld.googlevideo.com%2C&initcwndbps=2130000&spc=qEK7BxJFfMfjbxZEfzsKnu5MLkvwBFw&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=61102467&dur=3938.201&lmt=1685721854625803&mt=1685738480&fvip=1&keepalive=yes&fexp=24007246%2C51000024&c=ANDROID&txp=3318224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAKbQjUCE7ls2DfyvjWIvPEAZXBy1lquXZDH_Y9WimlPaAiBHZlQu6ibu--iaLo2_y_uZBMIhYZuDa58nCtvGtUtczw%3D%3D&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crmhost%2Cinitcwndbps&lsig=AG3C_xAwRQIgLpmSQANd6O_OJVsc5k2c17BcfHqhiaqSGowWTZ7strgCIQC_FbkYB7y015F8GDpoUzD6xkQqWdpRRnaZ3Zp3Ng-PZA%3D%3D")
        this.audio.mount(this.video.getElement() as HTMLVideoElement)
        this.video.mount(container)
    }

    public reset = () : void => {
        this.video.seek(0)
        this.audio.seek(0)
    }
}