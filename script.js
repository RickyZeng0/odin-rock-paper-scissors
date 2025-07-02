function getComputerChoice(){
    let randNum = Math.random();
    //0-0.3,0.3-0.6,0.6-0.9, it ensure three choices are generated randomly with equal probability
    if(randNum <= 0.3) return "rock";
    else if(randNum <= 0.6) return "paper";
    else return "scissors";
}

/*
1. enter rock, paper or scissors exact string
2. check valid input
3. repeat input/go on
*/

function checkValidInput(userInput){
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors") return true;
    else return false
}