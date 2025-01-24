// Play/Pause button functionality
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        events: {
            'onReady': onPlayerReady,
        },
    });
}

// When player is ready, enable buttons
function onPlayerReady(event) {
    playPauseBtn.addEventListener('click', togglePlayPause);
    muteBtn.addEventListener('click', toggleMute);
}

// Toggle play/pause
function togglePlayPause() {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
}

// Toggle mute/unmute
function toggleMute() {
    if (player.isMuted()) {
        player.unMute();
    } else {
        player.mute();
    }
}

// Load the YouTube Iframe API
const script = document.createElement('script');
script.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(script);