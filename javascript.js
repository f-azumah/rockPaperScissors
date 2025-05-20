

//Pseudocode 
// function getComputerChoice ():
// randomly generate a choice number between 0 and 3 (excluding 3) and store in variable randomChoice
// if randomChoice == 0:
//  return "rock"
// else if randomChoice == 1:
//  return "paper"
// else:
//  return "scissors"

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice == 0){
        return "rock";
    } else if (randomChoice == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log(getComputerChoice());

//Pseudocode 
// prompt user to enter a choice between rock, paper and scissors. save in variable human choice
// if humanChoice == "rock":
//  return "rock"
// else if humanChoice == "paper":
//  return "paper"
// else:
//  return "scissors"

function getHumanChoice(){
    let humanChoice = prompt("Enter a choice betwen rock, paper and scissors");

    if (humanChoice == "rock"){
        return "rock";
    } else if (humanChoice == "paper"){
        return "paper";
    } else if (humanChoice == "scissors"){
        return "scissors"
    }
}

// console.log(getHumanChoice());

//Pseudocode for playRound
// compare humanChoice with computerChoice
// if humanChoice.toLowerCase == computerChoice:
//  return "It's a draw!"
// else if humanChoice.toLowerCase == "rock" and computerChoice == "scissors":
//  return "You win! Rock beats Scissors"
// else if humanChoice.toLowerCase == "rock" and computerChoice == "paper":
//  return "You lose! Paper beats Rock"
// else if humanChoice.toLowerCase == "paper" and computerChoice == "rock":
//  return "You win! Paper beats Rock"
// else if humanChoice.toLowerCase == "paper" and computerChoice == "scissors":
//  return "You lose! Scissors beats Paper"
// else if humanChoice.toLowerCase == "scissors" and computerChoice == "paper":
//  return "You win! Scissors beats Paper"
// else if humanChoice.toLowerCase == "scissors" and computerChoice == "rock":
//  return "You lose! Rock beats Scissors"


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playround(humanChoice, computerChoice){
        console.log("you chose: ".concat(humanChoice));
        console.log("computer chose: ".concat(computerChoice));
        if (humanChoice.toLowerCase() == computerChoice){
            return "It's a draw!";
        } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"){
            humanScore++; 
            return "You win! Rock beats Scissors";
        } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper"){
            computerScore++;
            return "You lose! Paper beats Rock";
        } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock"){
            humanScore++;
            return "You win! Paper beats Rock";
        } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors"){
            computerScore++;
            return "You lose! Scissors beats Paper";
        } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
            humanScore++;
            return "You win! Scissors beats Paper";
        } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock"){
            computerScore++;
            return "You lose! Rock beats Scissors";
        }
    }

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playround(humanSelection, computerSelection));
    }
    
    console.log(`Final Scores: You -> ${humanScore}, Computer -> ${computerScore}.`);

}

console.log(playGame())