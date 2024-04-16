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
        return "You both selected " + playerSelection +". The Game is a tie";
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors')||
             (playerSelection === 'paper' && computerSelection === 'rock') ||
             (playerSelection === "scissors" && computerSelection === 'paper'))
        return "You win " + playerSelection + " beats " + computerSelection + "."
    else {
        return "You lose " + computerSelection + " beats " + playerSelection + "."
    }
}

// play a five round game
function playGame(){
    let playerScore = 0;
    let computerScore =0;

    for(let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);
        
        if (result === "You win " + playerSelection + " beats " + computerSelection + ".") {
            playerScore += 1;
    }       else if (result === "You lose " + computerSelection + " beats " + playerSelection + ".") {
            computerScore =+ 1;
    }
        console.log(`Round ${i+1}: ${result}`);
    }
}
