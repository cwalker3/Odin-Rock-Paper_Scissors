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
/* //function to get player choice
function getPlayerSelection() {
    let playerChoice;
    while (playerChoice != 'Rock' && playerChoice != 'Paper' && playerChoice != 'Scissors') {
        playerChoice = prompt("Rock, Paper, or Scissors");
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();
        return playerChoice;
    }
} */
//function to determine if there is a tie
function isTie(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
        return true;
    } else {
        return false;
    }
}
//function to determine if the player won
function playerWin(playerChoice, computerChoice) {
    if (playerChoice === 'Rock' && computerChoice === 'Scissors')
        return true;      
    else if (playerChoice === 'Paper' && computerChoice === 'Rock')
        return true;
    else if (playerChoice === 'Scissors' && computerChoice === 'Paper')
        return true;
    return false;
}

function updateScore(winner) {
    if (winner === 'player') 
        playerScoreDisplay.textContent = `Player: ${++playerScore}`;
    else
        computerScoreDisplay.textContent = `Computer: ${++computerScore}`;
    if (playerScore >= 5)
        if(confirm('You win!')) {
            playerScoreDisplay.textContent = 'Player: 0'
            computerScoreDisplay.textContent = 'Computer: 0'
            playerScore = 0;
            computerScore = 0;
        }

    if(computerScore >= 5)
        if(confirm('You lose!')) {
            playerScoreDisplay.textContent = 'Player: 0'
            computerScoreDisplay.textContent = 'Computer: 0'
            playerScore = 0;
            computerScore = 0;
        }
}

//function to simulate 1 round
function playRound(event) {
    playerChoice = this.className;
    computerChoice = getComputerChoice();
    if (isTie(playerChoice, computerChoice))
        result.textContent = `Tie game, Computer also chose ${playerChoice}`;
    else if (playerWin(playerChoice, computerChoice)) {
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        updateScore('player');
    } else {
        result.textContent = (`You Lose! ${computerChoice} beats ${playerChoice}`);
        updateScore('computer');
    }

}

let playerScore = 0;
let computerScore = 0;
let result = document.querySelector('.result');
let playerScoreDisplay = document.querySelector('.playerScore');
playerScoreDisplay.textContent = 'Player: 0';
let computerScoreDisplay = document.querySelector('.computerScore');
computerScoreDisplay.textContent = 'Computer: 0';

document.querySelector('.Rock').addEventListener('click', playRound);
document.querySelector('.Paper').addEventListener('click', playRound);
document.querySelector('.Scissors').addEventListener('click', playRound);