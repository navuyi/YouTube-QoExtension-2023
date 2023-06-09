import axios from "axios"
import { Audio } from "./Audio"
import { Video } from "./Video"
import { API_ENDPOINTS } from "@src/config/apiEndpoints"

export class Player{
    private static instance : Player
    
    private video : Video
    private secondaryVideo : Video | null = null
    private audio : Audio
    private secondaryAudio : Audio | null = null

    private constructor(){
        this.audio = new Audio()
        this.video = new Video(this.audio)

        document.addEventListener("keydown", (e) => {
            if(e.key === "P" && e.ctrlKey && e.shiftKey){
                this.changeQuality()
            }
        })
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
        this.audio.mount(container)
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

    private swapPlayers = () => {
        
    }

    private changeQuality = async () : Promise<void> => {
        try{
            // Get new source
            const request_url = API_ENDPOINTS.getMediaURLs+`?url=${window.location.href}`
            const response = await axios.get(request_url)

            // Create audio-video and assign new source
            this.secondaryAudio = new Audio(false)
            this.secondaryVideo = new Video(this.secondaryAudio, false)
            this.secondaryVideo.setSource(response.data.videoSource)
            this.secondaryAudio.setSource(response.data.audioSource)
            this.secondaryAudio.load()
            this.secondaryVideo.load()
    
            // Mount av to the DOM
            const container = document.getElementById("primary-inner") as HTMLElement
            this.secondaryVideo.mount(container)
            this.secondaryAudio.mount(container)
    
            // Make video not displayed
            this.secondaryVideo.getElement().style.display = "none"
            
            // Buffear ahead
            const deltaT = 10 // [s]
            const t1 = this.video.getCurrentTime()

            this.secondaryVideo.seek(t1 + deltaT)
            this.secondaryAudio.seek(t1 + deltaT)

            // Start checking
            const interval = setInterval(() => {
                const vState = this.secondaryVideo?.getReadyState() as number
                const aState = this.secondaryAudio?.getReadyState() as number

                if(this.video.getCurrentTime() > t1+deltaT && vState >= 4 && aState >= 4){
                    console.log("Ready to swap. Swapping...")
                    clearInterval(interval)
            
                    this.secondaryVideo!.seek(this.video.getCurrentTime())
                    this.secondaryAudio!.seek(this.video.getCurrentTime())

                    this.secondaryVideo!.play()
                    this.secondaryAudio?.setVolume(0)
                    this.secondaryAudio!.play()

                    setTimeout(() => {
                        this.secondaryAudio?.setVolume(1);
                        this.secondaryVideo!.getElement().style.display = "unset"

                        this.video.unmount()
                        this.audio.unmount()
    
                        this.video = this.secondaryVideo as Video
                        this.audio = this.secondaryAudio as Audio
                        this.secondaryAudio = null
                        this.secondaryVideo = null
                    }, 2000)
                }else{console.log("Not ready to swap")}
            }, 500)
        }catch(err){
            console.log(err)

        }
    }

}