let questions = [];
let currentQuestion = 0;
let score = 100;
let totalPoints = 0;

document.addEventListener("DOMContentLoaded", function () {
    fetch("questions.json")
        .then(response => response.json())
        .then(data => {
            questions = data;
            totalPoints = questions.reduce((sum, q) => sum + q.points, 0); // Somme des points max
            loadQuestion();
        })
        .catch(error => {
            console.error("Erreur de chargement des questions :", error);
            document.getElementById("question").innerHTML = "⚠️ Erreur de chargement des questions.";
        });
});

function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").innerHTML = questions[currentQuestion].question;
        updateProgress();
    } else {
        showResult();
    }
}

function answer(points) {
    score -= points * (100 / totalPoints); // Calcul basé sur les poids des questions
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function updateProgress() {
    let progress = (currentQuestion / questions.length) * 100;
    document.getElementById("progress-bar").value = progress;
    document.getElementById("progress-text").innerText = Math.round(progress) + "%";
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    let resultText = "Ton score de pureté est de " + Math.round(score) + "%.<br>";

    if (score >= 80) {
        resultText += "✨ Pur";
    } else if (score >= 60) {
        resultText += "😇 Plutôt pur";
    } else if (score >= 40) {
        resultText += "😏 Normal";
    } else if (score >= 20) {
        resultText += "😈 Plutôt impur";
    } else {
        resultText += "🔥 Impur";
    }

    document.getElementById("result-text").innerHTML = resultText;
    document.getElementById("progress-bar").value = 100;
    document.getElementById("progress-text").innerText = "100%";
}

// 🌙🔆 Mode sombre / clair avec transition fluide
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    themeIcon.src = body.classList.contains("dark-mode") ? "moon.svg" : "sun.svg";
}
