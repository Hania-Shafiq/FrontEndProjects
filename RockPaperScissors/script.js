let userScore = 0;
let compScore = 0;

// Select elements for user and computer scores, and message
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const userScorePara = document.querySelector("#user-score"); // Corrected selector as string
const compScorePara = document.querySelector("#comp-score"); // Corrected selector as string

// Add event listeners to each choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get user's choice
        playGame(userChoice); // Start the game
    });
});

// Main game logic
const playGame = (userChoice) => {
    console.log("User Choice: ", userChoice);
    const compChoice = genCompChoice(); // Generate computer's choice
    if (userChoice === compChoice) {
        drawGame(); // Handle draw
    } else {
        let userWin;
        // Determine the winner based on rules
        if (userChoice === "rock") {
            userWin = compChoice === "scissors"; // Rock beats Scissors
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock"; // Paper beats Rock
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper"; // Scissors beat Paper
        }
        showWinner(userWin, userChoice, compChoice); // Display the result
    }
};

// Generate computer's random choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rIndex = Math.floor(Math.random() * 3); // Corrected variable name
    return options[rIndex];
};

// Display a draw message
const drawGame = () => {
    msg.innerText = "It's a draw!";
};

// Display the winner and update scores
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        userScore++; // Increment user's score
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
        compScore++; // Increment computer's score
        compScorePara.innerText = compScore;
    }
};
