// Holding document for js code //


// Creating a list of possible options.//
const rsp = ['rock', 'paper', 'scissors']

// Getting random choice from the computer player.//
function getComputerChoice () {

    let rand = Math.floor(Math.random() * rsp.length);
    return rsp[rand];

}

// Getting input from the user via a prompt. //

