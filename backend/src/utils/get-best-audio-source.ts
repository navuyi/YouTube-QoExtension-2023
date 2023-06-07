import { IMediaSource } from "../types/yt-dlp.types";



export const getBestAudioSource = (audioSources:IMediaSource[]) : IMediaSource => {
    audioSources.sort((a,b) => b.tbr - a.tbr)
    return audioSources[0]
}