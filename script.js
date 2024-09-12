const questions = [
    {
        question: "Qual é o maior planeta do nosso sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: 2
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["Miguel de Cervantes", "William Shakespeare", "Fernando Pessoa", "Jorge Luis Borges"],
        answer: 0
    },
    {
        question: "Em que ano o homem pisou na Lua pela primeira vez?",
        options: ["1969", "1972", "1955", "1980"],
        answer: 0
    },
    {
        question: "Qual o elemento químico de símbolo 'O'?",
        options: ["Oxigênio", "Ouro", "Osmium", "Óxido"],
        answer: 0
    },
    {
        question: "Quantos ossos tem o corpo humano adulto?",
        options: ["206", "208", "210", "212"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false; // Variável para impedir múltiplas contagens

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionButtons = document.querySelectorAll(".option");

    questionElement.textContent = questions[currentQuestion].question;
    optionButtons.forEach((button, index) => {
        button.textContent = questions[currentQuestion].options[index];
    });

    answered = false; // Reseta a variável de controle
    document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selectedOption) {
    if (!answered) {  // Verifica se a pergunta já foi respondida
        const correctAnswer = questions[currentQuestion].answer;
        if (selectedOption === correctAnswer) {
            score++;
        }
        answered = true;  // Marca a pergunta como respondida
        document.getElementById("next-btn").style.display = "block";
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";
    loadQuestion();
}

window.onload = loadQuestion;
