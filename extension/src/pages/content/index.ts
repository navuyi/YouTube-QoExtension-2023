


window.addEventListener('yt-page-data-updated', async () => {
  // To mute the tab use serice-worker - messaging
  console.log("yt-page-data-updated")
});

window.addEventListener('yt-navigate-start', () => {

});

window.addEventListener('load', function () {
  console.log('load');
});



