
const apiKey = 'AIzaSyBiExg6qtRdmt7Ui4gfdfrM85f8pzSwj1o';
const videoId = 'frf7qxiN2qU'; 


// Initialize the Plyr video player
const player = new Plyr('#player', {
  controls: ['play', 'progress', 'mute', 'volume', 'settings', 'fullscreen'],
});

// YouTube API callback
function onYouTubeIframeAPIReady() {
  // Create YouTube player
  window.player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: videoId,
    playerVars: {
      'autoplay': 1,
      'controls': 0, // Disable YouTube default controls
      'modestbranding': 1,
      'showinfo': 0,
      'rel': 0,
    },
    events: {
      'onReady': onPlayerReady,
    },
  });
}

// Plyr setup after YouTube player is ready
function onPlayerReady(event) {
  event.target.playVideo();
  player.play();
}
