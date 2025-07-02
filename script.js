function getComputerChoice(){
    let randNum = Math.random();
    //0-0.3,0.3-0.6,0.6-0.9, it ensure three choices are generated randomly with equal probability
    if(randNum <= 0.3) return "rock";
    else if(randNum <= 0.6) return "paper";
    else return "scissors";
}

/* getHumanChoice() logic:
1. enter rock, paper or scissors exact string
2. check valid input
3. repeat input/go on
*/

function checkValidInput(userInput){
    //covert it to lowercase before comparision so it is case-insensitive
    let standardUserInput = userInput.toLowerCase();
    if(standardUserInput === "rock" || standardUserInput === "paper" || standardUserInput    === "scissors") return true;
    else return false
}

function getHumanChoice(){
    let userInput = prompt('Enter "rock"/"paper"/"scissors" (exact string without quote)')
    while(true){
        if(checkValidInput(userInput)) break;
        userInput = prompt(`You have entered ${userInput}, which is invalid input, please enter "rock"/"paper"/"scissors" (exact string without quote)`);
    }
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

//getHumanChoice();