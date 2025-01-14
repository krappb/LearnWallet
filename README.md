# LearnWallet
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>LearnWallet</title>
</head>
<body>
    <div id="sidebar" class="sidebar">
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#library">Library</a></li>
                <li><a href="#market">Market</a></li>
                <li><a href="#profile">My Profile</a></li>
            </ul>
        </nav>
    </div>
    
    <header>
        <button id="menuToggle">☰</button>
        <h1>LearnWallet</h1>
        <p class="description">The first website in the world that pays you to study!</p>
        <nav>
            <a href="#flashcards">Flashcards</a>
            <a href="#quizzes">Quizzes</a>
            <span id="points">Points: 0</span>
        </nav>
    </header>
    
    <main>
        <section id="flashcards">
            <h2>Flashcards</h2>
            <select id="flashcard-theme">
                <option value="math">Math</option>
                <option value="history">History</option>
                <option value="english">English</option>
                <option value="science">Science</option>
            </select>
            <div id="flashcard-container"></div>
            <button id="nextFlashcard">Next Flashcard</button>
        </section>
        
        <section id="quizzes">
            <h2>Quizzes</h2>
            <select id="quiz-theme">
                <option value="math">Math</option>
                <option value="history">History</option>
                <option value="english">English</option>
                <option value="science">Science</option>
            </select>
            <div id="quiz-container">
                <h3 id="question"></h3>
                <div id="answers"></div>
                <button id="nextQuestion">Next Question</button>
            </div>
        </section>
        
        <section id="login">
            <h2>Login</h2>
            <form id="login-form">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit">Login</button>
            </form>
        </section>
        
        <section id="signup">
            <h2>Sign Up</h2>
            <form id="signup-form">
                <label for="new-username">Username:</label>
                <input type="text" id="new-username" name="new-username" required>
                <label for="new-password">Password:</label>
                <input type="password" id="new-password" name="new-password" required>
                <button type="submit">Sign Up</button>
            </form>
        </section>
    </main>
    
    <script src="script.js"></script>
</body>
</html>
/ Flashcards Data
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
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

.sidebar {
    width: 200px;
    height: 100%;
    background-color: #4CAF50;
    color: white;
    position: fixed;
    left: -200px;
    transition: left 0.3s ease;
    padding-top: 20px;
    z-index: 1;
}

.sidebar nav ul {
    list-style-type: none;
    padding: 0;
}

.sidebar nav ul li {
    padding: 10px 15px;
}

.sidebar nav ul li a {
    color: white;
    text-decoration: none;
}

#menuToggle {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 10px 0;
    text-align: center;
}

main {
    padding: 20px;
}

h2 {
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 10px;
}

#flashcard-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}

form {
    margin: 20px 0;
}

input[type="text"], input[type="password"] {
    margin: 10px;
    padding: 10px;
    width: 100%;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
