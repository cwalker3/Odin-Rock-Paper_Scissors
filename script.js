//function to get random computer choice
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
//function to get player choice
function getPlayerSelection() {
    let playerChoice;
    while (playerChoice != 'Rock' && playerChoice != 'Paper' && playerChoice != 'Scissors') {
        playerChoice = prompt("Rock, Paper, or Scissors");
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();
        return playerChoice;
    }
}
//function to determine if there is a tie
function isTie(playerChoice, computerChoice) {
    if (playerChoice == computerChoice){
        return true;
    } else {
        return false;
    }
}
//function to determine if the player won
function playerWin(playerChoice, computerChoice) {
    if (playerChoice == 'Rock'){
        if (computerChoice == 'Scissors')
            return true;      
    }else if (playerChoice == 'Paper'){
        if (computerChoice == 'Rock')
            return true;
    }else if (playerChoice == 'Scissors'){
        if (computerChoice == 'Paper')
            return true;
    }
    return false;
}
//function to simulate 1 round
function playRound() {
    player = getPlayerSelection();
    computer = getComputerChoice();
    if (isTie(player, computer))
        console.log("Tie game.");
    else if (playerWin(player, computer)) {
        console.log(`You win! ${player} beats ${computer}`);
        return true;
    } else {
        console.log(`You Lose! ${computer} beats ${player}`);
        return false;
    }

}
//function to simulate a game of 5 rounds
function game() {
    let playerWinCount = 0;
    for (let i = 0; i < 5; i++) {
        if (playRound())
            playerWinCount++;
    }
    console.log(`You won ${playerWinCount}/5 rounds`);
}

