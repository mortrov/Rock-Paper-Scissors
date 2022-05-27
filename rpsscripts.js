

function computerPlay(){
    const rps = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * rps.length);
    return rps[random];
}

