const flashcards = [
    { front: "What is the integral of x dx?", back: "x²/2 + C" },
    { front: "What is the quadratic formula?", back: "x = (-b ± √(b²-4ac)) / 2a" },
    { front: "What is the derivative of sin(x)?", back: "cos(x)" }
];

let currentFlashcardIndex = 0;

function showFlashcard() {
    const flashcardContainer = document.getElementById('flashcard-container');
    const flashcard = flashcards[currentFlashcardIndex];
    flashcardContainer.innerHTML = `<div class="flashcard" onclick="this.classList.toggle('flipped')">
        <div class="front">${flashcard.front}</div>
        <div class="back">${flashcard.back}</div>
    </div>`;
}

document.getElementById('nextFlashcard').addEventListener('click', () => {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcards.length;
    showFlashcard();
});

showFlashcard();
