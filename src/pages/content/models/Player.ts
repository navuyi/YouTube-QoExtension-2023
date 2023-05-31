import { Audio } from "./Audio"
import { Video } from "./Video"


/**
 * Player class is responsible for managing audio-video playback.
 * Audio-video synchronization, player UI, seeking, pausing etc.
*/
export class Player{
    private static instance : Player
    private video : Video
    private audio : Audio

    constructor(){
        this.video = Video.getInstance()
        this.audio = Audio.getInstance()
    }

    public static getInstance = () => {
        if(!Player.instance) {
            Player.instance = new Player()
        }
        return Player.instance
    }

    public mount = (container:HTMLElement) => {
        this.video.setSource("https://rr1---sn-u2oxu-3ufs.googlevideo.com/videoplayback?expire=1685543941&ei=pQd3ZNnHF9SoyQWA3qTYDQ&ip=2a01%3A111f%3Af39%3A300%3A759a%3Ab4dc%3Af169%3Acc04&id=o-ADZM70e15-7ggI5FMEZ6nfLE2TF9M1nIGO4sv3VsjY_k&itag=248&source=youtube&requiressl=yes&mh=PR&mm=31%2C29&mn=sn-u2oxu-3ufs%2Csn-u2oxu-f5fl7&ms=au%2Crdu&mv=m&mvi=1&pl=41&initcwndbps=1495000&spc=qEK7Bw3eV07-Ojgz0QSkKRRsJeg5Sv4&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=22037409&dur=192.425&lmt=1542639142197927&mt=1685521968&fvip=5&keepalive=yes&fexp=24007246%2C51000023&beids=24350018&c=ANDROID&txp=5432432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAOPTe4VODrb8AsT3QfUb2JzLIGBn38plLEfVewoIo3ZoAiA4NsMXMNzrla-t32VOD16jmVe_BuPs2HqcumRfH5wcyQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgdVLRh5_aiAkLGABEnW5yd5T4TD2EdTMh3_lr9aSTzAkCICGBr_-jtjOuixxtXnHK9QNbqz2B2_1QX6Z7w23Phvzc")
        this.audio.setSource("https://rr1---sn-u2oxu-3ufs.googlevideo.com/videoplayback?expire=1685543941&ei=pQd3ZNnHF9SoyQWA3qTYDQ&ip=2a01%3A111f%3Af39%3A300%3A759a%3Ab4dc%3Af169%3Acc04&id=o-ADZM70e15-7ggI5FMEZ6nfLE2TF9M1nIGO4sv3VsjY_k&itag=251&source=youtube&requiressl=yes&mh=PR&mm=31%2C29&mn=sn-u2oxu-3ufs%2Csn-u2oxu-f5fl7&ms=au%2Crdu&mv=m&mvi=1&pl=41&initcwndbps=1495000&spc=qEK7Bw3eV07-Ojgz0QSkKRRsJeg5Sv4&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=2868598&dur=192.481&lmt=1542640782182720&mt=1685521968&fvip=5&keepalive=yes&fexp=24007246%2C51000023&beids=24350018&c=ANDROID&txp=5411222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAN3ktCqzg6B8-mRnTQYpmbcFTRFECAcj5o_ZqMjMlk2fAiBW420EmRXXpyvsRRZ9ggj7CneDkM5100NbREuDYdvJLw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgdVLRh5_aiAkLGABEnW5yd5T4TD2EdTMh3_lr9aSTzAkCICGBr_-jtjOuixxtXnHK9QNbqz2B2_1QX6Z7w23Phvzc")
        this.audio.mount(this.video.getElement() as HTMLVideoElement)
        this.video.mount(container)
    }

    public reset = () : void => {
        this.video.seek(0)
        this.audio.seek(0)
    }
}