const options = ["rock", "paper", "scissors"];
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

let computerScore = 0;
let playerScore = 0;
let roundNum = 1;


function sendMessageRight(text) {
    const messageBubble = document.createElement("div");
    messageBubble.classList.add("bubble-container");
    const message = document.createElement("div");
    message.classList.add("box2", "sb2");
    message.innerText = text;
    messageBubble.appendChild(message);
    const chatContainer = document.getElementsByClassName("chat-container");
    chatContainer[0].appendChild(messageBubble);
    chatContainer[0].scrollTop = chatContainer[0].scrollHeight;
}

function sendMessageLeft(text) {
    const messageBubble = document.createElement("div");
    messageBubble.classList.add("bubble-container");
    const message = document.createElement("div");
    message.classList.add("box1", "sb1");
    message.innerText = text;
    messageBubble.appendChild(message);
    const chatContainer = document.getElementsByClassName("chat-container");
    chatContainer[0].appendChild(messageBubble);
    chatContainer[0].scrollTop = chatContainer[0].scrollHeight;
}

function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}

function playGame() {
    let playerSelection = this.id;
    console.log(playerSelection);
    let computerSelection = computerPlay();
    if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' &&
                    computerSelection === 'paper' &&
                    (computerScore <= 5 || playerScore <= 5))
    ) {
            playerScore++; // New Score
            sendMessageRight(`You won round #${roundNum}. \nScore: ${playerScore} - ${computerScore}.`);
            if (playerScore >= 5) {
                    sendMessageRight(`YOU WON!\nYou got 5 points!`);
                    rockButton.removeEventListener('click', playGame);
                    paperButton.removeEventListener('click', playGame);
                    scissorsButton.removeEventListener('click', playGame);
            }
            roundNum++;
    } else if (
            (playerSelection === 'rock' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' &&
                    computerSelection === 'rock' &&
                    (computerScore <= 5 || playerScore <= 5))
    ) {
            computerScore++; // Computer Score
            sendMessageLeft(`Computer won round #${roundNum}. \nScore: ${playerScore} - ${computerScore}.`);
            if (computerScore >= 5) {
                    sendMessageLeft(`YOU LOST!\nComputer got 5 points!`);
                    rockButton.removeEventListener('click', playGame);
                    paperButton.removeEventListener('click', playGame);
                    scissorsButton.removeEventListener('click', playGame);
            }
            roundNum++;
    } else {
            sendMessageLeft(`Tie for round #${roundNum}`);
            roundNum++;

    }
}

rockButton.addEventListener("click",playGame);
paperButton.addEventListener("click",playGame);
scissorsButton.addEventListener("click",playGame);
