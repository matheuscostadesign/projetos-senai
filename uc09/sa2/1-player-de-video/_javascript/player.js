var meuVideo = document.getElementById("playerCustomizado");

function playPause() {
  if (meuVideo.paused) {
    meuVideo.play();
  } else {
    meuVideo.pause();
  }
}

function telaCheia() {
  meuVideo.requestFullscreen();
}
