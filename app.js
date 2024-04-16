// Holding document for js code //

// Getting random choice from the computer player.//


function getComputerChoice () {
    let rsp = ['rock', 'paper', 'scissors']

    let rand = Math.floor(Math.random() * rsp.length);
    return rsp[rand];

}