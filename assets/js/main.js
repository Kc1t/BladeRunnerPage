const start = document.getElementById("start");
const audio = new Audio("/assets/song.mp3");
audio.volume = 0.6;
let isPlaying = true;

start.addEventListener("click", function () {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
});