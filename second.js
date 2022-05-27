let playerSelection = "Rock";
let computerSelection = computerPlay();
let compwins = 0;
let playerwins = 0;
let ties = 0;

function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Pick: Rock, Paper, or Scissors (default: Rock): ");
        computerSelection = computerPlay();
        console.log(gameround(playerSelection.toLowerCase(), computerSelection.toLowerCase()));
        
    }
    if(compwins > playerwins){
        return "You Lose! Computer Score: " + compwins + " | Player score: " + playerwins + " | Ties: " + ties;  
    }
    else if(playerwins > compwins){
        return "Yow Win! Player Score: " + playerwins + " | Computer score: " + compwins + " | Ties: " + ties;
    }
    else return "Tie"
}

console.log(game());
