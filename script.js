document.addEventListener("DOMContentLoaded", () => {
    let questions = [];
    let currentQuestion = 0;
    let score = 100;

    const questionText = document.getElementById("question-text");
    const answersDiv = document.getElementById("answers");
    const progressBar = document.getElementById("progress");
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    if (!questionText || !answersDiv || !progressBar) {
        console.error("❌ Erreur : Éléments HTML introuvables !");
        return;
    }

    // Chargement des questions
    fetch("questions.json")
        .then(response => response.json())
        .then(data => {
            questions = data;
            if (questions.length > 0) {
                loadQuestion();
            } else {
                questionText.innerHTML = "❌ Aucune question disponible.";
            }
        })
        .catch(error => {
            console.error("❌ Erreur de chargement des questions :", error);
            questionText.innerHTML = "❌ Erreur de chargement des questions.";
        });

    function loadQuestion() {
        if (currentQuestion >= questions.length) {
            showResult();
            return;
        }

        let questionData = questions[currentQuestion];

        questionText.innerHTML = questionData.question;
        answersDiv.innerHTML = "";

        questionData.answers.forEach(answer => {
            let button = document.createElement("button");
            button.innerText = answer.text;
            button.classList.add("answer-btn");
            button.onclick = () => {
                score -= answer.penalty;
                currentQuestion++;
                updateProgress();
                loadQuestion();
            };
            answersDiv.appendChild(button);
        });
    }

    function updateProgress() {
        let progress = (currentQuestion / questions.length) * 100;
        progressBar.style.width = progress + "%";
    }

    function showResult() {
        let resultText = "Résultat : ";
        if (score > 80) resultText += "Pur 😇";
        else if (score > 60) resultText += "Plutôt pur 🙂";
        else if (score > 40) resultText += "Normal 😏";
        else resultText += "Impur 😈";

        questionText.innerHTML = resultText;
        answersDiv.innerHTML = "";
        progressBar.style.width = "100%";
    }

    // Gestion du mode sombre / clair
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            themeIcon.src = "sun.svg";
        } else {
            themeIcon.src = "moon.svg";
        }
    });
});
