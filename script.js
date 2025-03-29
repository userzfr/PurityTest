let questions = [];
let currentQuestion = 0;
let score = 0;

// Charger les questions
fetch('questions.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur de chargement: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Questions chargées:", data);
        questions = data;
        loadQuestion();
    })
    .catch(error => {
        console.error("Erreur:", error);
        document.getElementById("question-text").innerText = "⚠️ Erreur de chargement des questions.";
    });

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }

    let question = questions[currentQuestion];
    document.getElementById("question-text").innerText = question.question;

    let answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = "";

    if (question.type === "bool") {
        createButton("Oui", 1);
        createButton("Non", 0);
    } else if (question.type === "scale") {
        for (let i = 0; i <= 5; i++) {
            createButton(i, i);
        }
    }

    updateProgress();
    document.getElementById("next-button").disabled = true;
}

function createButton(text, value) {
    let button = document.createElement("button");
    button.className = "btn btn-outline-light m-1";
    button.innerText = text;
    button.onclick = () => selectAnswer(value);
    document.getElementById("answer-buttons").appendChild(button);
}

function selectAnswer(value) {
    score += value;
    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function updateProgress() {
    let progress = ((currentQuestion + 1) / questions.length) * 100;
    if (progress > 100) progress = 100; // Sécurité pour éviter > 100%

    let progressBar = document.getElementById("progress-bar");
    progressBar.style.width = progress + "%";
    progressBar.innerText = Math.round(progress) + "%";
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    let maxScore = questions.length * 5;
    let percentage = (score / maxScore) * 100;
    let resultText = "";

    if (percentage < 20) {
        resultText = "Pur 😇";
    } else if (percentage < 40) {
        resultText = "Plutôt pur 😊";
    } else if (percentage < 60) {
        resultText = "Normal 😏";
    } else if (percentage < 80) {
        resultText = "Plutôt impur 😈";
    } else {
        resultText = "Impur 😈🔥";
    }

    document.getElementById("result-text").innerText = `Score : ${percentage.toFixed(2)}%\nCatégorie : ${resultText}`;
}

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    loadQuestion();
}
