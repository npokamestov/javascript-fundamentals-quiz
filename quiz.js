var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start');
var scoresBtn = document.getElementById('high-scores-btn');
var body = document.body;
var main = document.main;
var questionEl = document.createElement('section');
var sectionEl = document.createElement('section');
var h2El = document.createElement('h2');
var choicesEl = document.createElement('ul');
var scoresEl = document.createElement('ul');
var liEl = document.createElement('li');

var choiceItems = document.getElementsByTagName('li');
var scoreItems = document.getElementsByTagName('li');

var highScores = [];
var savedScoreIdCounter = 0;


var questionsArr = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
        "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

function countdown() {
    var timeLeft = (15 * questionsArr.length);

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
        if (timeLeft >= 1) {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;
        } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
        }
    }, 1000);
};

function displayMessage() {
    var message = "Time is up!"
    timerEl.textContent = message
};

function startQuiz() {
    countdown();
    var landing = document.getElementById("landing")
    landing.remove();
    var highScores = document.getElementById("high-scores-btn")
    highScores.remove();
};

function renderQuiz() {

};

function viewScores() {
    var scores = document.getElementById("main");
    scores.remove();
    body.appendChild(sectionEl);
    h2El.textContent = "High Scores";
    sectionEl.appendChild(h2El);
    sectionEl.appendChild(scoresEl);
    var savedScores = localStorage.getItem("highScores");
    if (!savedScores) {
        return false;
    }
    savedScores = JSON.parse(savedScores);
    for (var i = 0; i < savedScores.length; i++) {
        savedScores[i].id = savedScoreIdCounter

    }
    liEl.textContent = localStorage.getItem
}










       


startBtn.onclick = startQuiz;

scoresBtn.onclick = viewScores;