function gameround(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper' ||
    playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors' ||
    playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == "rock"){
        return "You Lose! Paper beats Rock."
    }
    else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "Tie!"
    }
    else return "You Win!"
}

const playerSelection = "rock";
const computerSelection = computerPlay();
//console.log(playerSelection + ' ' + computerSelection);      selection debugger
console.log(gameround(playerSelection,computerSelection));