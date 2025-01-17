// Flashcard questions data
const flashcards = [
    { front: "What is 2+2?", back: "4" },
    { front: "What is 3+5?", back: "8" },
    { front: "What is the capital of France?", back: "Paris" }
];

let currentFlashcard = 0;

function showFlashcard() {
    const flashcardContainer = document.getElementById('flashcard-container');
    const flashcard = flashcards[currentFlashcard];

    flashcardContainer.innerHTML = `
        <div class="flashcard" onclick="this.classList.toggle('flipped')">
            <div class="front">${flashcard.front}</div>
            <div class="back">${flashcard.back}</div>
        </div>
    `;
}

// Switch to the next flashcard
document.getElementById('nextFlashcard').addEventListener('click', () => {
    currentFlashcard = (currentFlashcard + 1) % flashcards.length;
    showFlashcard();
});

// Initialize the first flashcard
document.addEventListener('DOMContentLoaded', () => {
    showFlashcard();
});
