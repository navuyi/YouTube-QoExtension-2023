import * as youtubedl from "youtube-dl-exec"
import { IMediaSource} from "../types/yt-dlp.types"

export const getMediaSources = async (yt_url : string) : Promise<IMediaSource[]> => {
    const {stdout:raw} = await youtubedl.exec(yt_url, {
        skipDownload: true,
        listFormats:true,
        dumpSingleJson:true
    }) 

    const openingCurlyBraceIndex = raw.indexOf("{")
    const jsonString = raw.slice(openingCurlyBraceIndex, raw.length)
    const jsonObject = JSON.parse(jsonString)

    return jsonObject.formats
}

export const getAudioSources = (allFormats : IMediaSource[]) => {
    return allFormats.filter(format => format.vcodec === "none" && format.acodec !== "none")
}

export const getVideoSources = (allFormats : IMediaSource[]) => {
    return allFormats.filter(format => format.vcodec !== "none" && format.acodec === "none")
}
