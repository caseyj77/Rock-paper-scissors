// Holding document for js code //


// Creating a list of possible options.//
const rsp = ['rock', 'paper', 'scissors']

// Getting random choice from the computer player.//
function getComputerChoice () {

    let rand = Math.floor(Math.random() * rsp.length);
    return rsp[rand];

}

// Getting input from the user via a prompt. //

let playerSelection = prompt("type rock, paper, or scissors");
let computerSelection = getComputerChoice();

// play a round //
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "You both selected " +playerSelection ". The Game is a tie";
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors')||
             (playerSelection === 'paper' && computerSelection === 'rock') ||
             (playerSelection === "scissors" && computerSelection === 'paper'))
        return "You win " +playerSelection " beats" +computerSelection "."
    else {
        return "You lose" +computerSelection " beats" +playerSelection "."
    }
}