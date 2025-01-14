// Flashcards Data
const flashcards = {
    math: [
        { front: "What is 2 + 2?", back: "4" },
        { front: "What is 5 * 5?", back: "25" }
    ],
    history: [
        { front: "Who was the first president of the USA?", back: "George Washington" },
        { front: "In what year did World War II end?", back: "1945" }
    ]
};

// Quizzes Data
const quizzes = {
    math: [
        {
            question: "What is 5 + 3?",
            answers: ["6", "8", "9", "7"],
            correct: "8"
        },
        {
            question: "What is 7 * 6?",
            answers: ["42", "44", "40", "45"],
            correct: "42"
        }
    ]
};

// Simple Login and Sign-Up Logic
const users = [];

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    
    users.push({ username, password });
    alert("Sign up successful! You can now log in.");
});

let currentFlashcard = 0;
document.getElementById("nextFlashcard").addEventListener("click", function() {
    const theme = document.getElementById("flashcard-theme").value;
    const flashcard = flashcards[theme][currentFlashcard];
    
    document.getElementById("flashcard-container").innerHTML = `
        <div class="flashcard">
            <p>${flashcard.front}</p>
            <button onclick="showAnswer()">Show Answer</button>
        </div>
    `;
    
    function showAnswer() {
        alert(flashcard.back);
        currentFlashcard = (currentFlashcard + 1) % flashcards[theme].length;
    }
});

let currentQuestion = 0;
document.getElementById("nextQuestion").addEventListener("click", function() {
    const theme = document.getElementById("quiz-theme").value;
    const quiz = quizzes[theme][currentQuestion];
    
    document.getElementById("quiz-container").innerHTML = `
        <h3>${quiz.question}</h3>
        ${quiz.answers.map(answer => `
            <button onclick="checkAnswer('${answer}')">${answer}</button>
        `).join("")}
    `;
    
    function checkAnswer(selectedAnswer) {
        if (selectedAnswer === quiz.correct) {
            alert("Correct!");
        } else {
            alert("Wrong answer!");
        }
        currentQuestion = (currentQuestion + 1) % quizzes[theme].length;
    }
});
