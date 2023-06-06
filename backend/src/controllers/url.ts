import { NextFunction } from "express";
import { Request } from "express";
import { Response } from "express";

import { getAudioFormats, getSourceFormats, getVideoFormats } from "../utils/yt-dlp-utils";


const getURL = async (req:Request, res:Response, next:NextFunction) => {
    const url = "https://www.youtube.com/watch?v=HDre_o2qz1o"
    const allFormats : any[] = await getSourceFormats(url)

    const audioFormats = getAudioFormats(allFormats)
    const videoFormats = getVideoFormats(allFormats)

    res.json({
        audio: audioFormats,
        video: videoFormats
    })
}









export {
    getURL
}