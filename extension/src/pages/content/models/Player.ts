import axios from "axios"
import { Audio } from "./Audio"
import { Video } from "./Video"
import { API_ENDPOINTS } from "@src/config/apiEndpoints"

export class Player{
    private static instance : Player
    
    private video : Video
    private audio : Audio

    private constructor(){
        this.audio = new Audio()
        this.video = new Video(this.audio)
    }

    public getVideo = () : Video => {return this.video}
    public getAudio = () : Audio => {return this.audio}

    public static getInstance = () : Player => {
        if(Player.instance != null) return Player.instance;
        else{
            return Player.instance = new Player()
        }
    }

    public mount = (container:HTMLElement) => {
        this.audio.mount(this.video.getElement() as HTMLVideoElement)
        this.video.mount(container)
    }

    public updateSources = async () : Promise<void> => {
        const request_url = API_ENDPOINTS.getMediaURLs+`?url=${window.location.href}`
        try{
            const response = await axios.get(request_url)
            this.video.setSource(response.data.videoSource)
            this.audio.setSource(response.data.audioSource)
            this.video.load(); this.audio.load()
        }catch(err){
            console.log(err)
        }
    }

    public removeSources = () : void => {
        this.video.setSource(""); this.video.load()
        this.audio.setSource(""); this.video.load()
    }
}