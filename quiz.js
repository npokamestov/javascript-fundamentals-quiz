var body = document.body;
var main = document.main;
var scoresBtn = document.getElementById('scores-btn');
var timerEl = document.getElementById('timer');

var landingEl = document.getElementById('landing');
var startBtn = document.getElementById('start-btn');

var quizEl = document.getElementById('quiz');
var questionTitleEl = document.createElement('question-title');
var buttonA = document.getElementById('a');
var buttonB = document.getElementById('b');
var buttonC = document.getElementById('c');
var buttonD = document.getElementById('d');
var resultsEl = document.getElementById('results');

var quizEndEl = document.getElementById('quiz-end');
var gameScoreEl = document.getElementById('game-score');
var initialsInputEl = document.getElementById('initials');
var submitBtn = document.getElementById('submit-btn')

var highScoresEl = document.getElementById('high-scores');
var scoresListEl = document.getElementById('scores-list');
var endBtnsEl = document.getElementById('end-btns');
var goBackBtn = document.getElementById('go-back-btn');
var clearScoresBtn = document.getElementById('clear-scores-btn');

var lastQuestionIndex = questionsArr.length;
var currentQuestionIndex = 0;
var timeLeft = (15 * questionsArr.length);
var timerInterval;

var correct;
var score = timeLeft;
var highScores = [];


// var sectionEl = document.createElement('section');
// var h2El = document.createElement('h2');
// var choicesEl = document.createElement('ul');
// var scoresEl = document.createElement('ul');
// var liEl = document.createElement('li');

// var choiceItems = document.getElementsByTagName('li');
// var scoreItems = document.getElementsByTagName('li');

// var highScores = [];
// var savedScoreIdCounter = 0;

var questionsArr = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parentheses",
        choiceD: "square brackets",
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        answer: "all of the above"
    },
    {
        question:"String values must be enclosed within ____ when being assigned to variables.",
        choiceA: "commas",
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "parentheses",
        answer: "quotes"
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA: "JavaScript",
        choiceB: "terminal / bash",
        choiceC: "for loops",
        choiceD: "console.log",
        answer: "console.log"
    }
];

function renderQuizQuestions () {
    landingEl.remove();
    quizEndEl.remove();
    highScoresEl.remove()
    if (currentQuestionIndex === lastQuestionIndex) {
        return showScore();
    }
    var currentQuestion = questionsArr[currentQuestionIndex];
    questionTitleEl.innerHTML = "<p>" + currentQuestion.questionTitleEl + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

function startQuiz() {
    landingEl.remove();
    scoresBtn.remove();
    quizEndEl.remove();
    highScoresEl.remove();
    renderQuizQuestions();

    timerInterval = setInterval(function() {
        if (timeLeft >= 1) {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;
        } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
        showScore();
        }
    }, 1000);
    quizEl.style.display = "block";
};

function displayMessage() {
    var message = "Time is up!"
    timerEl.textContent = message
};

function showScore() {
    quizEl.remove();
    clearInterval(timerInterval);
    initialsInputEl.value = "";
    gameScoreEl.innerHTML = "Your score is " + score + "!";
};

submitBtn.addEventListener('click', function highScore() {
    if (initialsInputEl.value === "") {
        alert("Initials cannot be blank");
        return false;
    }
    else {
        highScores = JSON.parse(localStorage.getItem("highScores"));
        var currentUser = initialsInputEl.value;
        var currentHighScore = {
            name: currentUser,
            score: score
        };
        quizEndEl.remove();
        highScoresEl.appendTo(main);

    }
})

startBtn.addEventListener("click", startQuiz);





























// function countdown() {
//     var timeLeft = (15 * questionsArr.length);

//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function() {
//         if (timeLeft >= 1) {
//         timerEl.textContent = "Time: " + timeLeft;
//         timeLeft--;
//         } else {
//         timerEl.textContent = '';
//         clearInterval(timeInterval);
//         displayMessage();
//         }
//     }, 1000);
// };

// function displayMessage() {
//     var message = "Time is up!"
//     timerEl.textContent = message
// };

// function startQuiz() {
//     countdown();
//     var landing = document.getElementById("landing")
//     landing.remove();
//     var highScores = document.getElementById("high-scores-btn")
//     highScores.remove();
//     renderQuiz();
// };

// function renderQuiz() {
//     renderQuestion();
//     renderChoices();
// };

// function renderQuestion() {
//     for (var i = 0; i < questionsArr.length; i++) {
//         var questionTitleEl = document.createElement('h2');
//         questionTitleEl.textContent = questionsArr[i].title;
//         questionTitleEl.setAttribute("value", questionsArr[i].title);
//         body.appendChild(sectionEl)
//         sectionEl.appendChild(questionTitleEl)
//         break;
//     }
// };

// function renderChoices() {
//     // var questionChoices = questionsArr.choices
//     var questions = questionsArr.length
//     for (var i = 0; i < questions; i++) {
//         var choices = questionsArr[i].choice;
//         for (var j = 0; j < choices.length; j++) {
//             var questionChoiceEl = document.createElement('button');
//             questionChoiceEl.textContent = questionsArr[i].choices;
//             questionChoiceEl.setAttribute("value", questionsArr[i].choices);
//             body.appendChild(sectionEl)
//             sectionEl.appendChild(choicesEl);
//             choicesEl.appendChild(liEl);
//             liEl.appendChild(questionChoiceEl);
//             break;
//         }
//     }
// }

// function viewScores() {
//     var scores = document.getElementById("main");
//     scores.remove();
//     body.appendChild(sectionEl);
//     h2El.textContent = "High Scores";
//     sectionEl.appendChild(h2El);
//     sectionEl.appendChild(scoresEl);
//     var savedScores = localStorage.getItem("highScores");
//     if (!savedScores) {
//         return false;
//     }
//     savedScores = JSON.parse(savedScores);
//     for (var i = 0; i < savedScores.length; i++) {
//         savedScores[i].id = savedScoreIdCounter

//     }
//     liEl.textContent = localStorage.getItem
// }










       


// startBtn.onclick = startQuiz;

// scoresBtn.onclick = viewScores;