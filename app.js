// Creating a list of possible options.
const rsp = ['rock', 'paper', 'scissors'];

// Getting random choice from the computer player.
function getComputerChoice() {
    let rand = Math.floor(Math.random() * rsp.length);
    return rsp[rand];
}

// Getting input from the user via a prompt.

// play a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "You both selected " + playerSelection + ". The Game is a tie";
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
             (playerSelection === 'paper' && computerSelection === 'rock') ||
             (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return "You win " + playerSelection + " beats " + computerSelection + ".";
    }
    else {
        return "You lose " + computerSelection + " beats " + playerSelection + ".";
    }
}

// play a five round game
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Type rock, paper, or scissors");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());

        if (result.includes("You win")) {
            playerScore += 1;
        } else if (result.includes("You lose")) {
            computerScore += 1;
        }

        console.log(`Round ${i+1}: ${result}`);
    }

    console.log(`Final Score: Player ${playerScore} - ${computerScore} Computer`);
}

// Start the game
playGame();
