let timeLeft = 25 * 60; // seconds
let timerInterval = null;
let isRunning = false;
let currentSession = "work";
const sessionConfig = {
  work: 25 * 60,
  break: 5 * 60,
  longBreak: 15 * 60,
};

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
    if (currentSession === "work") {
      alert("Toma un descanso");
      switchToSession("break");
    } else {
      alert("Vuelve al trabajo");
    }
    switchToSession("work");
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
  timeLeft = sessionConfig[currentSession];
  updateDisplay();

  let button = document.getElementById("resetButton");
  button.textContent = "Reset";

  let buttonIniciarName = document.getElementById("startButton");
  buttonIniciarName.textContent = "Iniciar";
}

function switchToSession(newSession) {
  if (isRunning) {
    pauseTimer;
  }
  currentSession = newSession;
  timeLeft = sessionConfig[currentSession];
  updateDisplay();
  updateSessionButton();
  pauseTimer();
}

function updateSessionButton() {
  const workButton = document.getElementById("workButton");
  const breakButton = document.getElementById("breakButton");
  const longBreakButton = document.getElementById("longBreakButton");
  workButton.classList.remove("active");
  breakButton.classList.remove("active");
  longBreakButton.classList.remove("active");
  if (currentSession === "work") {
    workButton.classList.add("active");
    breakButton.classList.add("active");
    longBreakButton.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateDisplay();
  updateSessionButton();
  let startPauseButton = document.getElementById("startButton");
  startPauseButton.addEventListener("click", startTimer);

  let startResetButton = document.getElementById("resetButton");
  startResetButton.addEventListener("click", resetTimer);

  let workButton = document.getElementById("workButton");
  workButton.addEventListener("click", function () {
    switchToSession("work");
  });

  let breakButton = document.getElementById("breakButton");
  breakButton.addEventListener("click", function () {
    switchToSession("break");
  });

  let longBreakButton = document.getElementById("longBreakButton");
  longBreakButton.addEventListener("click", function () {
    switchToSession("longBreak");
  });
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
