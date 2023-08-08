import { debug } from "console";
import { MouseTracker } from "./models/MouseTracker";
import { NetworkThrottler } from "./models/NetworkThrottler";
import { DebugDataMonitor } from "./models/video/DebugDataMonitor";
import { VideoEventsMonitor } from "./models/video/VideoEventsMonitor";

const debugDataMonitor = new DebugDataMonitor()
const videoEventsMonitor = new VideoEventsMonitor()

/**
 * Event is fired when page is loaded and data is updated
 * Fired on both navigation forward and navigating back
*/ 
window.addEventListener('yt-page-data-updated', (e) => {
  if(window.location.href.includes("https://www.youtube.com/watch?v=")) {
    debugDataMonitor.init()
    videoEventsMonitor.init()
  }else{
    debugDataMonitor.stop()
    videoEventsMonitor.stop()
  }
  console.log("yt-page-data-updated")
});

window.addEventListener("yt-navigate-finish", (e) => {
  console.log("yt-navigate-finish")
})

/**
 * Events is fired when page starts to navigate.
 * There is no guarantee that page data is updated - stick to yt-page-data-updated
*/
window.addEventListener('yt-navigate-start', (e) => {
  console.log(e)
  console.log("yt-navigate-start")
});

window.addEventListener('load', function () {
  console.log('load');
});



const mouseTracker = MouseTracker.getInstance()
//mouseTracker.init()

const throttler = NetworkThrottler.getInstance()
throttler.init()


