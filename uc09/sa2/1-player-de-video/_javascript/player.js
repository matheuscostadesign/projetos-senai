var meuVideo = document.getElementById("playerCustomizado");

function playPause() {
  if (meuVideo.paused) {
    meuVideo.play();
  } else {
    meuVideo.pause();
  }
}

function ampliarVideo() {
  meuVideo.width = 800;
}

function reduzirVideo() {
  meuVideo.height = 200;
}

function tamanhoNormalVideo() {
  meuVideo.height = 400;
}

function telaCheia() {
  meuVideo.requestFullscreen();
}

function aumentarVolume() {
  meuVideo.volume += 0.1;
}

function diminuirVolume() {
  meuVideo.volume -= 0.1;
}

function mutar() {
  meuVideo.v;
}
