
export const disableOriginalVideoPlayer = async () : Promise<void> => {
    await new Promise<void>(resolve => {
      const interval = setInterval(() => {
        const player = document.getElementById("player")
        const originalVideo = Array.from(document.getElementsByTagName("video")).find(vid => vid.className.includes("html5-main-video"))
  
        if(player != null && originalVideo != null) {     
          originalVideo.autoplay = false
          originalVideo.pause()
          originalVideo.muted = true
          player.style.display = "none"
  
          if(originalVideo.paused === true && originalVideo.muted === true && player.style.display === "none"){
            clearInterval(interval)
            document.body.style.display = "unset"
            resolve()
          }
        }
      }, 500) // <-- the value here has to be significantly long eg. 300-500 ms
    })
  }