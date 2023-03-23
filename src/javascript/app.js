// Puzzle sequence
var puzzleSequence = [1, 3, 5, 7, 9];
var puzzleIndex = 0;

// Puzzle screen elements
var puzzleScreen = document.getElementById("puzzle-screen");
var puzzleTitle = document.getElementById("puzzle-title");
var puzzleDescription = document.getElementById("puzzle-description");
var puzzleAnswer = document.getElementById("puzzle-answer");
var submitAnswerBtn = document.getElementById("submit-answer-btn");

// Victory screen elements
var victoryScreen = document.getElementById("victory-screen");
var victoryMessage = document.getElementById("victory-message");
var victoryDescription = document.getElementById("victory-description");
var nextRoomBtn = document.getElementById("next-room-btn");

// Second puzzle equation
var secondPuzzleEquation = "3x + 7 = 22";
var secondPuzzleAnswer = 5;

// Second puzzle screen elements
var secondPuzzleScreen = document.getElementById("second-puzzle-screen");
var secondPuzzleTitle = document.getElementById("second-puzzle-title");
var secondPuzzleDescription = document.getElementById("second-puzzle-description");
var secondPuzzleEquationEl = document.getElementById("second-puzzle-equation");
var secondPuzzleAnswerEl = document.getElementById("second-puzzle-answer");
var secondSubmitAnswerBtn = document.getElementById("second-submit-answer-btn");

// Loss screen elements
var lossScreen = document.getElementById("loss-screen");
var lossMessage = document.getElementById("loss-message");

// Submit answer function for first puzzle
submitAnswerBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var answer = parseInt(puzzleAnswer.value);
    if (answer === puzzleSequence[puzzleIndex]) {
        puzzleIndex++;
        if (puzzleIndex === puzzleSequence.length) {
            showSecondPuzzleScreen();
        } else {
            showPuzzleScreen();
        }
    } else {
        showLossScreen();
    }
});

// Submit answer function for second puzzle
secondSubmitAnswerBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var answer = parseInt(secondPuzzleAnswerEl.value);
    if (answer === secondPuzzleAnswer) {
        showVictoryScreen();
    } else {
        showLossScreen();
    }
});

// Show puzzle screen
function showPuzzleScreen() {
    puzzleTitle.innerText = "Number sequence puzzle";
    puzzleDescription.innerText = "What number comes next in the sequence: 1, 3, 5, 7, ___?";
    puzzleAnswer.value = "";
    puzzleScreen.style.display = "block";
    victoryScreen.style.display = "none";
    secondPuzzleScreen.style.display = "none";
    lossScreen.style.display = "none";
}

// Show second puzzle screen
function showSecondPuzzleScreen() {
    secondPuzzleTitle.innerText = "Equation puzzle";
    secondPuzzleDescription.innerText = "Solve the following equation for x:";
    secondPuzzleEquationEl.innerText = secondPuzzleEquation;
    secondPuzzleAnswerEl.value = "";
    puzzleScreen.style.display = "none";
    victoryScreen.style.display = "none";
    secondPuzzleScreen.style.display = "block";
    lossScreen.style.display = "none";
}

// Show victory screen
function showVictoryScreen() {
    victoryMessage.innerText = "Congratulations!";
    victoryDescription.innerText = "You have completed the puzzles and unlocked the door to the next room.";
    puzzleScreen.style.display = "none";
    victoryScreen.style.display = "block";
    secondPuzzleScreen.style.display = "none";
    lossScreen.style.display = "none";
}

// Show loss screen
// function loss screen
