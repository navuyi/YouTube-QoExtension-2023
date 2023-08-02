import { MouseTracker } from "./models/MouseTracker";
import { NetworkThrottler } from "./models/NetworkThrottler";
import { DebugDataMonitor } from "./models/DebugDataMonitor";


const debugDataMonitor = new DebugDataMonitor()

window.addEventListener('yt-page-data-updated', (e) => {
  console.log("yt-page-data-updated")
  debugDataMonitor.start() // <-- start the nerd stats monitoring
});

window.addEventListener('yt-navigate-start', (e) => {
  console.log("yt-navigate-start")
  debugDataMonitor.stop() // <-- stop the nerd stats monitoring
});

window.addEventListener('load', function () {
  console.log('load');
});


const mouseTracker = MouseTracker.getInstance()
mouseTracker.init()

const throttler = NetworkThrottler.getInstance()
throttler.init()


