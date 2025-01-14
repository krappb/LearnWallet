const questions = [
    {
        question: "What is the value of π (pi) to two decimal places?",
        answers: ["3.14", "3.15", "3.16", "3.17"],
        correct: "3.14"
    },
    {
        question: "Who was the first President of the United States?",
        answers: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        correct: "George Washington"
    },
    {
        question: "What year did the Titanic sink?",
        answers: ["1905", "1912", "1918", "1925"],
        correct: "1912"
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const currentQuiz = questions[currentQuestionIndex];

    questionElement.innerText = currentQuiz.question;
    answersElement.innerHTML = '';

    currentQuiz.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.addEventListener("click", () => {
            button.classList.add(answer === currentQuiz.correct ? "correct" : "incorrect");
            Array.from(answersElement.children).forEach(btn => btn.disabled = true);
        });
        answersElement.appendChild(button);
    });
}

document.getElementById("nextQuestion").addEventListener("click", () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    displayQuestion();
});

displayQuestion();
