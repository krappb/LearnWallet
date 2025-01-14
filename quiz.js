const quizData = [
    {
        question: "What is the value of π to two decimal places?",
        options: ["3.14", "3.16", "2.14", "3.41"],
        answer: "3.14",
    },
    {
        question: "What is 5+7?",
        options: ["10", "12", "11", "13"],
        answer: "12",
    },
];

let currentQuestion = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    answersElement.innerHTML = question.options
        .map(option => `<button onclick="checkAnswer('${option}')">${option}</button>`)
        .join('');
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Wrong answer!');
    }
    currentQuestion = (currentQuestion + 1) % quizData.length;
    showQuestion();
}

document.getElementById('nextQuestion').addEventListener('click', showQuestion);

showQuestion();
