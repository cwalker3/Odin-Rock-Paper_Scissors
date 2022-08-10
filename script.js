function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let computerChoice;
switch(randomNumber) {
    case 0:
        computerChoice = 'Rock';
        break;
    case 1:
        computerChoice = 'Paper';
        break;
    case 2:
        computerChoice = 'Scissors'
        break;
}
return computerChoice;
}
function playerSelection() {
    let playerChoice;
    while (playerChoice != 'Rock' && playerChoice != 'Paper' && playerChoice != 'Scissors') {
        playerChoice = prompt("Rock, Paper, or Scissors");
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();
    }
}

function isTie(getPlayerSelection, getComputerSelection) {
    if (getPlayerSelection() = getComputerSelection()) {
        result = 'Tie game!';
        console.log(result);
    }    
}


