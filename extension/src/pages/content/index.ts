import { MouseTracker } from "./models/MouseTracker";
import { NetworkThrottler } from "./models/NetworkThrottler";
import { DebugDataMonitor } from "./models/video/DebugDataMonitor";
import { VideoController } from "./models/video/VideoController";

const debugDataMonitor = new DebugDataMonitor()

const videoController = new VideoController()

window.addEventListener('yt-page-data-updated', (e) => {
  console.log("yt-page-data-updated")
  videoController.start()
});

window.addEventListener('yt-navigate-start', (e) => {
  console.log("yt-navigate-start")
  videoController.stop()
});

window.addEventListener('load', function () {
  console.log('load');
});



const mouseTracker = MouseTracker.getInstance()
//mouseTracker.init()

const throttler = NetworkThrottler.getInstance()
throttler.init()


