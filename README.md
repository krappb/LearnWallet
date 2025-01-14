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
