import { disableOriginalVideoPlayer } from "@src/utils/disableOriginalVideoPlayer";
import { addCustomVideoPlayer } from "@src/utils/addCustomVideoPlayer";



window.addEventListener('yt-page-data-updated', async () => {
  // To mute the tab use serice-worker - messaging
  console.log("yt-page-data-updated")
  await disableOriginalVideoPlayer()
  await addCustomVideoPlayer()
});

window.addEventListener('yt-navigate-start', () => {
  console.log("yt-navigate-start")
  document.body.style.display = "none"
});

//window.addEventListener('load', function () {
//  console.log('load');
//});



