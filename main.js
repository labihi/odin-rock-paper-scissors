const options = ["rock", "paper", "scissors"];

function sendMessage(text) {
    const messageBubble = document.createElement("div");
    messageBubble.classList.add("bubble-container");
    const message = document.createElement("div");
    message.classList.add("box2", "sb2");
    message.innerText = text;
    messageBubble.appendChild(message);
    const chatContainer = document.getElementsByClassName("message-container");
    chatContainer[0].appendChild(messageBubble);
}

function computerPlay() {
    return options[Math.floor(Math.random() * 3)].toUpperCase();
}

function playRound(playerSelection, computerSelection) {
    if (
        (computerSelection == "ROCK" && playerSelection == "SCISSORS") ||
        (computerSelection == "PAPER" && playerSelection == "ROCK") ||
        (computerSelection == "SCISSORS" && playerSelection == "PAPER")
    ) {
        return "The computer won this round";
    } else if (
        (computerSelection == "ROCK" && playerSelection == "PAPER") ||
        (computerSelection == "PAPER" && playerSelection == "SCISSORS") ||
        (computerSelection == "SCISSORS" && playerSelection == "ROCK")
    ) {
        return "The player won this round";
    } else {
        return "This round ended in a tie";
    }
}

function playerSelection(input) {
    input = getPlayerInput();
    if (input == "ROCK" || input == "PAPER" || input == "SCISSORS") {
        return input;
    } else {
        return console.error("Input non corretto");
    }
}

function playGame(numRounds) {
    let result;
    let playerPoints = 0;
    let computerPoints = 0;
    for (let index = 0; index < numRounds; index++) {
        result = playRound(playerSelection(), computerPlay());
        sendMessage(result);
        if (result === "The computer won this round") {
            ++computerPoints;
        } else if (result === "The player won this round") {
            ++playerPoints;
        }
    }
    if (playerPoints > computerPoints) console.log("The player won the game");
    else if (computerPoints > playerPoints)
        console.log("The computer won the game");
    else console.log("The game ended in a tie");
}

playGame(5);

function getPlayerInput() {
    const buttons = document.querySelectorAll(".button-container > button");
    buttons.forEach((button) => {
        button.addEventListener("click", (evt) => {
            let choice = evt.target.id;
            choice = choice.toUpperCase();

            console.log(choice);
            return choice;
        });
    });
}
