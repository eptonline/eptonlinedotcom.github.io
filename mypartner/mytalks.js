const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");


// voice answers arrays
const bio = ['I am  Shanto','I am your voice assistant','what if I ask you that?']
const weather = ['weather is good','its quite hot today']



recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
       readOutLoud(p.innerText);
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = bio[Math.floor(Math.random() * bio.length)];
      texts.appendChild(p);
 
    }
    if (text.includes("weather")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = weather[Math.floor(Math.random() * bio.length)];
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name") ||
      text.includes("who are you")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = bio[Math.floor(Math.random() * bio.length)];
      texts.appendChild(p);
    }
    if (text.includes("practice English")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Try eptonline.org ";
      texts.appendChild(p);
      console.log("opening site");
      window.open("https://eptonline.org");
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
//voice AI
function readOutLoud(x){
    const speech = new SpeechSynthesisUtterance(x);
    speech.text = x;
    speech.volume = 1 ;
    speech.rate = 1;
    speech.pitch = 1
    window.speechSynthesis.speak(speech)
}