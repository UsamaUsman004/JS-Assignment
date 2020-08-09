var questionsArray = [{
        question: "Full Form of RAM is?",
        answer: "random access memory",
        options: [
            "random access memory",
            "random actual memory",
            "right access memory",
            "none of the above",
        ]
    },
    {
        question: "Full Form of CPU is?",
        answer: "central processing unit",
        options: [
            "central program unit",
            "central processing unit",
            "control panel unit",
            "none of the above",
        ]
    },
    {
        question: "Full Form of E-MAIL is?",
        answer: "electronic mail",
        options: [
            "electric mail",
            "easy mail",
            "electronic mail",
            "none of the above",
        ]
    },
    {
        question: "Full Form of LCD is?",
        answer: "liquid crystal display",
        options: [
            "liquid crystal display",
            "light crystal display",
            "liquid cold display",
            "none of the above",
        ]
    },
    {
        question: "Full Form of SEO is?",
        answer: "none of the above",
        options: [
            "safe engine optimization",
            "secure engine optimization",
            "secret engine optimization",
            "none of the above",
        ]
    },
];

// Display Total Count of Questions

var qCount = document.getElementById('questionCount');
qCount.innerHTML = questionsArray.length;


function showQuestion(e) {

    // Show Current Question No
    var cCount = document.getElementById('currentCount');
    var questionCount = questionsArray.indexOf(questionsArray[e])
    cCount.innerHTML = questionCount + 1;

    // Show Questions
    var questionElement = document.getElementById('questionElement');
    questionElement.innerHTML = questionsArray[e].question;

    // ShowOptions
    var optionsElement = document.getElementsByClassName("options");
    for (var i = 0; i < optionsElement.length; i++) {
        optionsElement[i].innerHTML = questionsArray[e].options[i];
    }
}


var qCount = 0;

function nextQuestion() {
    check(qCount);
    qCount++;

    if (qCount <= questionsArray.length - 1) {
        showQuestion(qCount);
    }
    deactivate();
    setResult();
}


function activate(e) {
    deactivate();
    e.classList.add("active");
}

function deactivate(e) {
    var active = document.getElementsByClassName("active");
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active");
    }
}

var score = 0;
function check(e) {
    var active = document.getElementsByClassName("active");
    if (active[0].innerHTML == questionsArray[e].answer) {
        score += 10;
    }
}

function setResult() {
    if (qCount == questionsArray.length) {
        alert("Your Score = " + score);
        window.location.href = "index.html";
    }
}

function startQuiz() {
    window.location.href = "QuizSection.html"
}