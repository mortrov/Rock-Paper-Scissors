
function gameround(playerSelection, computerSelection){
    if(playerSelection == 'rock' && computerSelection == 'paper' ||
    playerSelection == 'paper' && computerSelection == 'scissors' ||
    playerSelection == 'scissors' && computerSelection == "rock"){
        return "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    }
    else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "Tie!"
    }
    else return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
}

const playerSelection = "rock";
const computerSelection = computerPlay();
//console.log(playerSelection + ' ' + computerSelection);      selection debugger
console.log(gameround(playerSelection.toLowerCase(),computerSelection.toLowerCase()));