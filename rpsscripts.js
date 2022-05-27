function computerPlay(){
    const rps = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * rps.length);
    return rps[random];
}

function gameround(playerSelection, computerSelection){
    if(playerSelection == 'rock' && computerSelection == 'paper' ||
    playerSelection == 'paper' && computerSelection == 'scissors' ||
    playerSelection == 'scissors' && computerSelection == "rock"){
        compwins++;
        return "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    }
    else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        ties++;
        return "Tie!";
    }
    else {
        playerwins++; 
        return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
       
    }
}

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
