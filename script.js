function getComputerChoice(){
    let randNum = Math.random();
    //0-0.3,0.3-0.6,0.6-0.9, it ensure three choices are generated randomly with equal probability
    if(randNum <= 0.3) return "rock";
    else if(randNum <= 0.6) return "paper";
    else return "scissors";
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

function checkGameEnd(){
    if(humanScore == 5 || computerScore == 5) return true;
    else return false;
}

//here the game start
let humanScore = 0;
let computerScore = 0;
