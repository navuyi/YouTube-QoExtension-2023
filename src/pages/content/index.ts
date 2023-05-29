import { disableOriginalVideoPlayer } from "@src/utils/disableOriginalVideoPlayer";
import { VideoPlayer } from "./models/VideoPlayer";

const addCustomVideoPlayer = async () : Promise<void> => {
  if(document.getElementById("custom-video-player") != null){
    // Custom player already exists
    return;
  }else{
    // Create custom player
    const primaryInner = document.getElementById("primary-inner")
    const vid = document.createElement("video")
    vid.id = "custom-video-player"
    vid.src = "https://rr2---sn-2pvopxg-2v1s.googlevideo.com/videoplayback?expire=1684947858&ei=Mu9tZKv1BcKXyAWD9pmgDQ&ip=149.156.124.19&id=o-AMXw088L5cdz-0S590ny8sQtUQftm2aSuvVTBrFli93q&itag=248&source=youtube&requiressl=yes&mh=P4&mm=31%2C29&mn=sn-2pvopxg-2v1s%2Csn-f5f7kn7e&ms=au%2Crdu&mv=m&mvi=2&pl=16&initcwndbps=787500&spc=qEK7B8iuG0ec89GYpqnuGSUduNBDcQM&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=73782433&dur=257.214&lmt=1671556144389251&mt=1684926087&fvip=5&keepalive=yes&fexp=24007246%2C24363393&beids=24350017&c=ANDROID&txp=5535434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgBCwjxhxDw0titcagq-Q7Szi9U0Cj5LUWHiUmMF-yQLYCIQD9UHxzwaNTWf7S0PTZN9egX3a1-zmCxs1IAhaspVjEOA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAP_zhH5Sq1MagKqM1veGvalYpfTmZE86HbSy-Ummarj1AiEA1Y3YZ54GnEHDGjs-YS9Esw11_U0I--UFKqUILs7npNY%3D"
    vid.autoplay = true
    vid.style.width = "100%"
    vid.controls = true
    primaryInner?.insertBefore(vid, primaryInner.firstChild)
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



