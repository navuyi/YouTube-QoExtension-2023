import { getAudioFormats, getSourceFormats, getVideoFormats } from "./yt-dlp-utils"

describe("Tests yt-dlp utils", () => {
    test("Should return an array of all source formats available for a video", async () => {
        
        const url = "https://www.youtube.com/watch?v=CahOLfYxiq0"
        const allFormats = await getSourceFormats(url)

        expect(allFormats.length).toBeGreaterThan(0)
        expect(allFormats.every(format => format.format_id!=null && format.url != null))
    })

    test("Should return only video sources", async () => {
        const url = "https://www.youtube.com/watch?v=CahOLfYxiq0"
        const allFormats = await getSourceFormats(url)

        const videoFormats = getVideoFormats(allFormats)
        expect(videoFormats.every(f => f.vcodec !== "none" && f.acodec === "none"))
    })

    test("Should return only audio sources", async () => {
        const url = "https://www.youtube.com/watch?v=CahOLfYxiq0"
        const allFormats = await getSourceFormats(url)

        const audioFormats = getAudioFormats(allFormats)
        expect(audioFormats.every(f => f.vcodec === "none" && f.acodec !== "none"))
    })
})