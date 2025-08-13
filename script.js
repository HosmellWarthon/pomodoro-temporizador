let timeLeft = 25 * 60; // seconds
let timerInterval = null;
let isRunning = false;

function timeFormat(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  let formattedMinutes = minutes.toString().padStart(2, "0");
  let formattedSeconds = remainingSeconds.toString().padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

function updateDisplay() {
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = timeFormat(timeLeft);
}

function countDown() {
  timeLeft--;
  updateDisplay();

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    isRunning = false;
    alert("Toma un descanso");
    resetTimer();
  }
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(countDown, 1000);

    const button = document.getElementById("startButton");
    button.textContent = "Pausar";
  } else {
    pauseTimer();
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;

  let button = document.getElementById("startButton");
  button.textContent = "Iniciar";
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  timeLeft = 25 * 60;
  updateDisplay();

  let button = document.getElementById("resetButton");
  button.textContent = "Reset";

  let buttonIniciarName = document.getElementById("startButton");
  buttonIniciarName.textContent = "Iniciar";
}

document.addEventListener("DOMContentLoaded", function () {
  updateDisplay();
  let startPauseButton = document.getElementById("startButton");
  startPauseButton.addEventListener("click", startTimer);

  let startResetButton = document.getElementById("resetButton");
  startResetButton.addEventListener("click", resetTimer);
});
//
const changeUserButton = document.querySelector("#userButton");

const myHeading = document.querySelector("h1");

function newUserName() {
  const newName = prompt("Ingresa tu nombre");
  if (!newName) {
    newUserName();
  } else {
    localStorage.setItem("name", newName);
    myHeading.textContent = `Bienvenido, ${newName}`;
  }
}

if (!localStorage.getItem("name")) {
  newUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Bienvenido, ${storedName}`;
}

changeUserButton.addEventListener("click", () => {
  newUserName();
});
