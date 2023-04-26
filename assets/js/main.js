const start = document.getElementById("start");
const audio = new Audio("/assets/song.mp3");
audio.volume = 0.6;
let isPlaying = true;
let img = document.getElementById('play')

start.addEventListener("click", function () {
  if (isPlaying) {
    audio.pause();
    img.setAttribute('src', 'assets/img/starts.svg');
  } else {
    audio.play();
     img.setAttribute('src', 'assets/img/pause.svg')
  }
  isPlaying = !isPlaying;
});

start.addEventListener("click", toggleAudio);
img.addEventListener("click", toggleAudio);