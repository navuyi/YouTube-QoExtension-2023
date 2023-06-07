import { getAudioSources, getMediaSources, getVideoSources } from "../yt-dlp"


describe("Tests yt-dlp utils", () => {
    test("Should return an array of all source formats available for a video", async () => {
        
        const url = "https://www.youtube.com/watch?v=CahOLfYxiq0"
        const allFormats = await getMediaSources(url)

        expect(allFormats.length).toBeGreaterThan(0)
        expect(allFormats.every(format => format.format_id!=null && format.url != null))
    })

    test("Should return only video sources", async () => {
        const url = "https://www.youtube.com/watch?v=CahOLfYxiq0"
        const allFormats = await getMediaSources(url)

        const videoFormats = getVideoSources(allFormats)
        expect(videoFormats.every(f => f.vcodec !== "none" && f.acodec === "none"))
    })

    test("Should return only audio sources", async () => {
        const url = "https://www.youtube.com/watch?v=CahOLfYxiq0"
        const allFormats = await getMediaSources(url)

        const audioFormats = getAudioSources(allFormats)
        expect(audioFormats.every(f => f.vcodec === "none" && f.acodec !== "none"))
    })
})