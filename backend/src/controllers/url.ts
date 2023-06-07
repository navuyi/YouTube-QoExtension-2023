import { NextFunction } from "express";
import { Request } from "express";
import { Response } from "express";
import { getAudioSources, getMediaSources, getVideoSources } from "../utils/yt-dlp";
import { getBestAudioSource } from "../utils/get-best-audio-source";



const getURL = async (req:Request, res:Response, next:NextFunction) => {
    const url = req.query.url as string
    const allFormats : any[] = await getMediaSources(url)

    const audioSources = getAudioSources(allFormats)
    const videoSources = getVideoSources(allFormats)

    const bestAudio = getBestAudioSource(audioSources)
    const randomVideo = videoSources[Math.floor(Math.random()*videoSources.length)]

    console.log(`Returning YouTube audio-video sources for ${url}, video bitrate ${randomVideo.tbr}`)
    res.json({
        audioSource: bestAudio.url,
        videoSource: randomVideo.url
    })
}









export {
    getURL
}