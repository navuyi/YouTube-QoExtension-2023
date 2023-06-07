import { disableOriginalVideoPlayer } from "@src/utils/disableOriginalVideoPlayer";
import { addCustomVideoPlayer } from "@src/utils/addCustomVideoPlayer";
import { Player } from "./models/Player";


window.addEventListener('yt-page-data-updated', async () => {
  // To mute the tab use serice-worker - messaging
  console.log("yt-page-data-updated")
  await disableOriginalVideoPlayer()
  await addCustomVideoPlayer()
});

window.addEventListener('yt-navigate-start', () => {
  const player = Player.getInstance()
  if(player.getVideo().isMounted() === true){
    console.log("removing")
    player.getVideo().pause()
    player.getAudio().pause()
    player.removeSources()
  }
  console.log("yt-navigate-start")
  document.body.style.display = "none"
});

//window.addEventListener('load', function () {
//  console.log('load');
//});



