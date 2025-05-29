
let humanScore = 0;
let computerScore = 0;
const display = document.querySelector(".display");
display.setAttribute("style", "border-style: solid; background: pink; padding: 10px; text-align: center")

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

function playGame(){

    function playround(humanChoice, computerChoice){
        displayMessage("Your selection: ".concat(humanChoice));
        displayMessage("Computer's selection: ".concat(computerChoice));
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

    let selections = document.querySelector(".selections");

    selections.addEventListener('click', (event) => {
        let target = event.target;
        // const humanSelection = "";
        let computerSelection = "";

        switch(target.className)  {
            case "rockBtn":
                computerSelection = getComputerChoice();
                display.textContent = "";
                displayMessage(playround("rock", computerSelection));
                break;
            case "paperBtn":
                computerSelection = getComputerChoice();
                display.textContent = "";
                displayMessage(playround("paper", computerSelection));
                break;
            case "scissorsBtn":
                computerSelection = getComputerChoice();
                display.textContent = "";
                displayMessage(playround("scissors", computerSelection));
                break;
        }

        let finalScores = document.createElement("p");
        finalScores.setAttribute("style", "color: white")
        finalScores.textContent = `Scores: You -> ${humanScore}, Computer -> ${computerScore}.`;

        display.appendChild(finalScores);

        // displayMessage(finalScores);

        if (humanScore == 5){
            setTimeout(() => {
                alert("You are the winner!");
                display.innerHTML = "";
                humanScore = 0;
                computerScore = 0;
                finalScores.textContent = `Scores: You -> ${humanScore}, Computer -> ${computerScore}.`
            }, 50); 
        } else if (computerScore == 5) {
            setTimeout(() => {
                alert("You lose! Try again!");
                display.innerHTML = "";
                humanScore = 0;
                computerScore = 0;
                finalScores.textContent = `Scores: You -> ${humanScore}, Computer -> ${computerScore}.`
            }, 50); 
        }
    })
    

    
    function displayMessage(message){
        // display.textContent = "";

        let output = document.createElement("div");
        display.appendChild(output);

        const p = document.createElement("p");
        p.textContent = message;
        output.appendChild(p);
    }
    
}


playGame()