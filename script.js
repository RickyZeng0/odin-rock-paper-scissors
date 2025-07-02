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
    let userInput = prompt('Enter "rock"/"paper"/"scissors" (string without quote)')
    while(true){
        if(checkValidInput(userInput)) break;
        userInput = prompt(`You have entered ${userInput}, which is invalid input, please enter "rock"/"paper"/"scissors" (string without quote)`);
    }
    return userInput.toLowerCase();
}

/* Play single round logic
1. get user and computer input
2. if user input = computer input , then draw
3. check user input again computer input , user win/lose
4. update the score
*/

function playRound(){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();


}

//It check user input against computer output , user is the main body
//It return the value that humanScore should add on. 1: human win , 0:draw , -1:human lost
function checkRound(humanSelection,computerSelection){
    //check if they are the same first so we don't need to check every cases(total 9 cases).
    if(humanSelection === computerSelection) {
        return 0;
    }
    //it is the else part , as humanSelection is not equal to the computerSelection, there is only win/lost
    else if(humanSelection == "rock"){
        if(computerSelection == "paper") return -1;
        else return 1;
    }
    else if(humanSelection == "paper"){
        if(computerSelection == "scissors") return -1;
        else return 1;
    }
    else{
        //It is the last case , so humanSelection should be "scissors"
        if(computerSelection == "rock") return -1;
        else return 1;
    }
}

let humanScore = 0;
let computerScore = 0;

//console.log(getHumanChoice());