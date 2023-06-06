import * as youtubedl from "youtube-dl-exec"
import { ISourceFormat } from "../types/yt-dlp.types"

export const getSourceFormats = async (yt_url : string) : Promise<ISourceFormat[]> => {
    const {stdout:raw} = await youtubedl.exec(yt_url, {
        skipDownload: true,
        listFormats:true,
        dumpJson:true
    }) 

    const openingCurlyBraceIndex = raw.indexOf("{")
    const jsonString = raw.slice(openingCurlyBraceIndex, raw.length)
    const jsonObject = JSON.parse(jsonString)

    return jsonObject.formats
}

export const getAudioFormats = (allFormats : ISourceFormat[]) => {
    return allFormats.filter(format => format.vcodec === "none" && format.acodec !== "none")
}

export const getVideoFormats = (allFormats : ISourceFormat[]) => {
    return allFormats.filter(format => format.vcodec !== "none" && format.acodec === "none")
}