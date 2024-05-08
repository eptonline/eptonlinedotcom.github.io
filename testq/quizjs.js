const quizData = [
    {
        question: "What is the capital of France?",
        type: "choice", // Answer type (choice or input)
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 0, // Index of correct answer in choices array
        explanation: "Paris is the capital of France.",
        score: 1 // Score for this question
    },
    {
        question: "What is 2 + 2?",
        type: "choice",
        choices: ["3", "4", "5", "6"],
        correctAnswer: 1,
        explanation: "2 + 2 equals 4.",
        score: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        type: "choice",
        choices: ["Earth", "Venus", "Jupiter", "Mars"],
        correctAnswer: 2,
        explanation: "Jupiter is the largest planet in our solar system.",
        score: 1
    },
    {
        question: "What is the capital of Italy?",
        type: "input",
        correctAnswer: "Rome", // Correct answer for input type
        explanation: "Rome is the capital of Italy.",
        score: 1
    },
    {
        question: "Solve the equation: $$x^2 + 3x - 4 = 0$$",
        type: "choice",
        choices: ["$$x = -4, 1$$", "$$x = -1, 4$$", "$$x = -2, 2$$", "$$x = -3, 3$$"],
        correctAnswer: 2, // Index of correct answer in choices array
        explanation: "The roots of the equation are $$x = -4$$ and $$x = 1$$.",
        score: 1
    }
];

const questionsContainer = document.getElementById('questions-container');
const quizForm = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit');
const timerElement = document.getElementById('time');
const timerElements = document.getElementById('timer');
const scoreReportElement = document.getElementById('score-report');

let score = 0;
let timeLeft = 180; // 3 minutes in seconds
let timer;

const minusMarking = 0.5; // Points to deduct for each incorrect answer

function displayQuestions() {
    quizData.forEach((questionData, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `

         <div class="ad-container">
                <!-- Google Ads -->
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7066409508007262"
     crossorigin="anonymous"></script>
<!-- fill-new-ads21232 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7066409508007262"
     data-ad-slot="3440482132"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
            </div>

            <div class="question">
    <h3>${index + 1}. ${questionData.question}</h3>
    ${questionData.type === "choice" ? `
        <div class="choices">
            ${questionData.choices.map((choice, choiceIndex) => `
                <label>
                    <input type="radio" name="question${index}" value="${choiceIndex}">
                    ${choice}
                </label>
            `).join('')}
        </div>` 
    : `
        <input type="text" name="question${index}" placeholder="Your answer">`
    }
</div>
        `;
        questionsContainer.appendChild(questionDiv);
    });


}

function calculateScore() {
    score = 0;
    quizData.forEach((questionData, index) => {
        const selectedAnswer = quizForm.elements[`question${index}`].value;
        if (selectedAnswer === questionData.correctAnswer.toString()) {
            score++;
        } else if (selectedAnswer !== "") {
            score -= minusMarking; // Subtract points for incorrect answer
        }
    });
}

function calculateScore() {
    score = 0;
    quizData.forEach((questionData, index) => {
        const userAnswer = quizForm.elements[`question${index}`].value.trim(); // Trim whitespace from user input
        if (questionData.type === "choice") {
            const selectedAnswer = quizForm.elements[`question${index}`].value;
            if (selectedAnswer === questionData.correctAnswer.toString()) {
                score += questionData.score;
            } else if (selectedAnswer !== "") {
            score -= minusMarking; // Subtract points for incorrect answer
        }
        } else if (questionData.type === "input") {
            if (userAnswer.toLowerCase() === questionData.correctAnswer.toLowerCase()) { // Case-insensitive comparison
                score += questionData.score;
            } else if (userAnswer.toLowerCase() !== "") {
            score -= minusMarking; // Subtract points for incorrect answer
        }
        }
    });
}

function markAnswers() {
    quizData.forEach((questionData, index) => {
        const selectedAnswer = quizForm.elements[`question${index}`].value;
        const choices = questionsContainer.querySelectorAll(`input[name="question${index}"]`);
        choices.forEach((choice, choiceIndex) => {
            const parentLabel = choice.parentElement;
            if (choiceIndex === parseInt(selectedAnswer)) {
                parentLabel.classList.add('selected');
                if (selectedAnswer !== questionData.correctAnswer.toString()) {
                    parentLabel.classList.add('wrong');
                }
            } else if (choiceIndex === questionData.correctAnswer) {
                parentLabel.classList.add('correct');
            }
        });
    });
}

function updateTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function countdown() {
    updateTime();
    if (timeLeft > 0) {
        timeLeft--;
        timer = setTimeout(countdown, 1000);
    } else {
        quizForm.removeEventListener('submit', handleSubmit);
        showResult();
    }
}

function handleSubmit(event) {
    event.preventDefault();
    clearTimeout(timer);
    calculateScore();
    markAnswers();
    showScoreReport();
}



function showScoreReport() {
     submitButton.style.display = 'none';
     timerElements.style.display = 'none';
    const timeTaken = 180 - timeLeft;
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    let timeTakenStr = `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    if (seconds > 0) {
        timeTakenStr += ` ${seconds} second${seconds !== 1 ? 's' : ''}`;
    }

    let reportHTML = `<h2>Score Report</h2>`;
    reportHTML += `<p>Your score is <strong>${score}</strong> out of <strong>${quizData.length}</strong>.</p>`;
    reportHTML += `<p>Time taken: <strong>${timeTakenStr}</strong>.</p>`;
     reportHTML += '<h2>Answer Explanations</h2>';

    quizData.forEach((questionData, index) => {
        reportHTML += `<p><strong>${index + 1}. ${questionData.question}</strong><br>`;
        reportHTML += `${questionData.explanation}</p>`;
    });
    

    scoreReportElement.innerHTML = reportHTML;
     MathJax.typeset();

}

quizForm.addEventListener('submit', handleSubmit);

displayQuestions();
countdown();

// Disable right-click
        window.addEventListener('contextmenu', function (e) { 
            e.preventDefault(); 
        }, false);

        // Disable inspecting elements
        document.onkeydown = function(e) {
            if (e.ctrlKey && 
               (e.keyCode === 67 || 
                e.keyCode === 86 || 
                e.keyCode === 85 || 
                e.keyCode === 117)) {
                return false;
            } else {
                return true;
            }
        };

         // Disable copy function
        document.addEventListener('copy', function(e) {
            e.preventDefault();
            alert('Copying content is disabled.');
        });