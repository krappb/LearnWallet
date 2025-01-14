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
    // Add more questions if needed
];

let currentQuestion = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    // Get the current question data
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    answersElement.innerHTML = question.options
        .map(option => `<button class="animate" onclick="checkAnswer('${option}')">${option}</button>`)
        .join('');
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Wrong answer!');
    }

    // Move to the next question
    currentQuestion = (currentQuestion + 1) % quizData.length;
    showQuestion();
}

// Initialize the quiz page when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
});
