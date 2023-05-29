import { disableOriginalVideoPlayer } from "@src/utils/disableOriginalVideoPlayer";
import { VideoPlayer } from "./models/VideoPlayer";

const addCustomVideoPlayer = async () : Promise<void> => {
  if(document.getElementById("custom-video-player") != null){
    return;
  }else{
    const primaryInner = document.getElementById("primary-inner") as  HTMLElement
    const vid = VideoPlayer.getInstance()
    vid.mount(primaryInner)
  }
}


window.addEventListener('yt-page-data-updated', async () => {
  await disableOriginalVideoPlayer()
  await addCustomVideoPlayer()
});

window.addEventListener('yt-navigate-start', () => {
  document.body.style.display = "none"
});

//window.addEventListener('load', function () {
//  console.log('load');
//});



