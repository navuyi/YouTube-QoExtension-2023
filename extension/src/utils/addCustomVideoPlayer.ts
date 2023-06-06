import { Player } from "@src/pages/content/models/Player"

export const addCustomVideoPlayer = async () : Promise<void> => {
    const primaryInner = document.getElementById("primary-inner") as  HTMLElement
    
    if(document.getElementById("custom-video") != null){
      //const player = new Player()
      //player.reset()
    }
    else{
      const player = new Player()
      player.mount(primaryInner)
    }
  }