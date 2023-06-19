import { Player } from "@src/pages/content/models/Player"

export const addCustomVideoPlayer = () : void => {  
    const player = Player.getInstance()

    if(player.getVideo().isMounted() === true){
      player.updateSources()
    }
    else{
      const primaryInner = document.getElementById("primary-inner") as HTMLElement
      player.mount(primaryInner)
      player.updateSources()
    }
}



