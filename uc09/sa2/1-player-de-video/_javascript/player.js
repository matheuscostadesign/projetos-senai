var meuVideo = document.getElementById("playerCustomizado");

function playPause() {
  if (meuVideo.paused) {
    meuVideo.play();
  } else {
    meuVideo.pause();
  }
}

function ampliarVideo() {
  meuVideo.width = 600;
}

function reduzirVideo() {
  meuVideo.width = 300;
}

function tamanhoNormalVideo() {
  meuVideo.width = 500;
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
  meuVideo.muted = true;
}

function desmutar() {
  meuVideo.muted = false;
}
