let quote;
let loaded = false;
let tries = 3;
let submitted = false;
let seconds = 60;
let interval;
let speaking = false;
let speechRecognition;

const loadQuote = async () => {
  loaded = false;
  setText("listen-button", "Loading...");
  setEnabled("listen-button", false);
  const response = await fetch("https://api.quotable.io/random?minLength=40&maxLength=60");
  let data = await response.json();
  quote = data.content;
  loaded = true;
  setText("listen-button", "Listen");
  setEnabled("listen-button", true);
}

const listenQuote = () => {
  if (!quote) return;
  if (tries === 0) return;
  const utterance = new SpeechSynthesisUtterance(quote);
  window.speechSynthesis.speak(utterance);
  tries--;
  setText("tries-remaining", tries);
}

const submit = () => {
  if (submitted) return;
  if (speaking) {
    toggleSpeak();
  }
  setShow("answer-block", true);
  const res = compare();
  setText("accuracy", (res.accuracy * 100).toString() + '%');
  setText("mistakes", res.mistakes);
  setText("wpm", res.wpm.toString() + " wpm");
  setText("answer-quote", quote);
  submitted = true;
  stopTimer();
}

const startTimer = () => {
  interval = setInterval(() => {
    if (seconds === 0) {
      submit();
    }
    seconds--;
    setText("seconds-remaining", seconds);
  }, 1000);
}

const stopTimer = () => {
  clearInterval(interval);
}

const reset = async () => {
  document.getElementById("user-input").value = '';
  tries = 3;
  seconds = 60;
  submitted = false;
  if (speaking) {
    toggleSpeak();
  }
  setText("tries-remaining", tries);
  setText("seconds-remaining", seconds);
  setShow("answer-block", false);
  await loadQuote();
  startTimer();
}

const initializeSpeechRecognition = () => {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  speechRecognition = new SpeechRecognition();
  speechRecognition.lang = 'en-uk';
  speechRecognition.continuous = true;
  speechRecognition.addEventListener('result', event => {
    document.getElementById("user-input").value = Array.from(event.results).map((result) => result[0].transcript).join(' ');
  });
}

const toggleSpeak = () => {
  if (speaking) {
    speechRecognition.stop();
    speaking = false;
    setText("speak-button", "Speak");
  } else {
    speechRecognition.start();
    speaking = true;
    setText("speak-button", "You're speaking...");
  }
}

/* Utilities */

const compare = () => {
  let userInput = document.getElementById("user-input").value;
  // Do some checking...
  return {
    mistakes: 5,
    accuracy: 0.83,
    wpm: 30
  }
}

/* Dom manipulation */

const setText = (elementId, text) => {
  document.getElementById(elementId).innerText = text;
}

const setEnabled = (elementId, enabled) => {
  document.getElementById(elementId).disabled = !enabled;
}

const setClickListener = (elementId, callback) => {
  document.getElementById(elementId).addEventListener('click', callback);
}

const setShow = (elementId, show) => {
  document.getElementById(elementId).style.display = show ? "block" : "none";
}

window.onload = () => {
  setClickListener("listen-button", listenQuote);
  setClickListener("submit-button", submit);
  setClickListener("reset-button", reset);
  setClickListener("speak-button", toggleSpeak);
  initializeSpeechRecognition();
  reset();
}
