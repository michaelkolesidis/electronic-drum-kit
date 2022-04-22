// Sounds
const kick = document.querySelector("#kick");
const clap = document.querySelector("#clap");
const hihat = document.querySelector("#hihat");
const snare = document.querySelector("#snare");
const conga = document.querySelector("#conga");

// Buttons
const kickButton = document.querySelector("#kickButton");
const clapButton = document.querySelector("#clapButton");
const hihatButton = document.querySelector("#hihatButton");
const snareButton = document.querySelector("#snareButton");
const congaButton = document.querySelector("#congaButton");

// Kick
let kickPlay = function (e) {
  // kick.currentTime = 0;
  kick.play();
};
kickButton.addEventListener("click", kickPlay, false);
kickButton.addEventListener("mouseover", kickPlay, false);

// Clap
let clapPlay = function (e) {
  // clap.currentTime = 0;
  clap.play();
};
clapButton.addEventListener("click", clapPlay, false);
clapButton.addEventListener("mouseover", clapPlay, false);

// Hi-hat
let hihatPlay = function (e) {
  // hihat.currentTime = 0;
  hihat.play();
};
hihatButton.addEventListener("click", hihatPlay, false);
hihatButton.addEventListener("mouseover", hihatPlay, false);

// Snare
let snarePlay = function (e) {
  // snare.currentTime = 0;
  snare.play();
};
snareButton.addEventListener("click", snarePlay, false);
snareButton.addEventListener("mouseover", snarePlay, false);

// Conga
let congaPlay = function (e) {
  // conga.currentTime = 0;
  conga.play();
};
congaButton.addEventListener("click", congaPlay, false);
congaButton.addEventListener("mouseover", congaPlay, false);

// Add event listener on keydown: play sound and add shadow
document.addEventListener(
  "keydown",
  (event) => {
    if (event.code === "KeyA") {
      kickPlay();
      kickButton.style.boxShadow = "0 0 14px rgb(255, 255, 255)";
    }
    if (event.code === "KeyS") {
      clapPlay();
      clapButton.style.boxShadow = "0 0 14px rgb(255, 255, 255)";
    }
    if (event.code === "KeyD") {
      hihatPlay();
      hihatButton.style.boxShadow = "0 0 14px rgb(255, 255, 255)";
    }
    if (event.code === "KeyF") {
      snarePlay();
      snareButton.style.boxShadow = "0 0 14px rgb(255, 255, 255)";
    }
    if (event.code === "KeyG") {
      congaPlay();
      congaButton.style.boxShadow = "0 0 14px rgb(255, 255, 255)";
    }
  },
  false
);

// Remove shadow on button release
document.addEventListener(
  "keyup",
  (event) => {
    if (event.code === "KeyA") {
      kickPlay();
      kickButton.style.boxShadow = "";
    }
    if (event.code === "KeyS") {
      clapPlay();
      clapButton.style.boxShadow = "";
    }
    if (event.code === "KeyD") {
      hihatPlay();
      hihatButton.style.boxShadow = "";
    }
    if (event.code === "KeyF") {
      snarePlay();
      snareButton.style.boxShadow = "";
    }
    if (event.code === "KeyG") {
      congaPlay();
      congaButton.style.boxShadow = "";
    }
  },
  false
);
