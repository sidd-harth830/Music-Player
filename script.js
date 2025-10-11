const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");

const songs = [
  { title: "Rozaana", artist: "Me", src: "Rozaana .mp3", img: "flower.jpg" },
  { title: "Mahi Aaja", artist: "Me", src: "Mahi Aaja .mp3", img: "sumaid-pal-singh-bakshi-My4iN2P6DM4-unsplash.jpg" },
  { title: "Superdox", artist: "Me", src: "4_5845852825212426383.mp3", img: "egor-komarov-jFM0iEDMEs0-unsplash.jpg" },
  { title: "Sochta Hoon", artist: "Me", src: "SOCHTA HOON.mp3", img: "declan-sun-3Ic4UaJkEz0-unsplash.jpg" },
];

let songIndex = 0;
let isPlaying = false;

function loadSong(song) {
  document.getElementById("title").textContent = song.title;
  document.getElementById("artist").textContent = song.artist;
  audio.src = song.src;
  cover.src = song.img;
}

function playSong() {
  isPlaying = true;
  audio.play();
  playBtn.textContent = "⏸️";
  cover.parentElement.classList.add("playing"); // <-- activates spin + glow
}

function pauseSong() {
  isPlaying = false;
  audio.pause();
  playBtn.textContent = "▶️";
  cover.parentElement.classList.remove("playing"); // <-- pauses spin
}

playBtn.addEventListener("click", () => {
  if (isPlaying) pauseSong();
  else playSong();
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

loadSong(songs[songIndex]);
