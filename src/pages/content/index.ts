import { disableOriginalVideoPlayer } from "@src/utils/disableOriginalVideoPlayer";
import { Player } from "./models/Player";

const addCustomVideoPlayer = async () : Promise<void> => {
  const primaryInner = document.getElementById("primary-inner") as  HTMLElement
  if(document.getElementById("custom-video") != null){
    // Here reset the player
    const player = Player.getInstance()
    player.reset()
  }
  else{
    const player = Player.getInstance()
    player.mount(primaryInner)
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



