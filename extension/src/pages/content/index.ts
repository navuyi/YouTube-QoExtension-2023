import { MouseTracker } from "./models/MouseTracker";
import { NetworkThrottler } from "./models/NetworkThrottler";



window.addEventListener('yt-page-data-updated', (e) => {
  // To mute the tab use serice-worker - messaging
  console.log(e)
  console.log("yt-page-data-updated")
});

window.addEventListener('yt-navigate-start', (e) => {
  console.log(e)
  console.log("yt-navigate-start")
});

window.addEventListener('load', function () {
  console.log('load');
});


const mouseTracker = MouseTracker.getInstance()
mouseTracker.init()

const throttler = NetworkThrottler.getInstance()
throttler.init()


