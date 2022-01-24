let quote;
let loaded = false;
let submitted = false;
let seconds = 60;
let interval;
let speaking = false;
let speechRecognition;

const loadQuote = async () => {
  loaded = false;
  const response = await fetch("https://api.quotable.io/random?minLength=40&maxLength=60");
  let data = await response.json();
  quote = data.content;
  loaded = true;
  setText("answer-quote1", quote);
   setEnabled("speak-button", true);
}

const listenQuote = () => {
  if (!quote) return;
  const utterance = new SpeechSynthesisUtterance(quote);
  window.speechSynthesis.speak(utterance);
  setText("answer-quote1", quote);
  startTimer();
}

const submit = () => {
  if (submitted) return;
  if (speaking) {
    toggleSpeak();
  }
  setShow("answer-block", true);
  const res = compare();
  setText("accuracy",  Math.round((res.accuracy * 100)) + '%');
  setText("mistakes",Math.round((100-(res.accuracy * 100))) + '%');
  setText("answer-quote", quote);
  submitted = true;
  setEnabled("speak-button", false);
  setEnabled("submit-button", false);
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
  seconds = 60;
  submitted = false;
  if (speaking) {
    toggleSpeak();
  }
  setText("seconds-remaining", seconds);
  setShow("answer-block", false);
  setText("speak-button", "Speak");
  setEnabled("submit-button", true);
  await loadQuote();
  
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
  startTimer();
  }
}

/* Utilities */

const compare = () => {
  let userInput = document.getElementById("user-input").value;
  // Do some checking...
  return {
    mistakes: 0,
    accuracy: similarity(removePunctuation(quote),userInput)
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
  setClickListener("submit-button", submit);
  setClickListener("reset-button", reset);
  setClickListener("speak-button", toggleSpeak);
  initializeSpeechRecognition();
  reset();
}



var regex = /[!"#&()*+,-./:;<=>?@[\]^_`{|}~]/g;

function removePunctuation(string) {
  return string.replace(regex, '');
}



function similarity(s1, s2) {
      var longer = s1;
      var shorter = s2;
      if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
      }
      var longerLength = longer.length;
      if (longerLength == 0) {
        return 1.0;
      }
      return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }

    function editDistance(s1, s2) {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();

      var costs = new Array();
      for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
          if (i == 0)
            costs[j] = j;
          else {
            if (j > 0) {
              var newValue = costs[j - 1];
              if (s1.charAt(i - 1) != s2.charAt(j - 1))
                newValue = Math.min(Math.min(newValue, lastValue),
                  costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0)
          costs[s2.length] = lastValue;
      }
      return costs[s2.length];
    }