const choices = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0

function getComputerChoice() {

    // times random (0 to 1) by the length of array and get floor, 
    //giving the values, 0,1 or 2 - represents the choices!
    let cpChoice = Math.floor(Math.random() * choices.length);

    return choices[cpChoice];
}

// console.log(getComputerChoice())

function getHumanChoice() {

    let huChoice = parseInt(prompt('Rock (1), Paper (2), or Scissors (3)? Please choose the corresponding number of your choice:'));

    if (huChoice === 0) {
        return choices[0];
    }
    else if (huChoice === 1) {
        return choices[1];
    }
    else if (huChoice === 2) {
        return choices[2];
    }
    else {
        return console.log("Enter a number!");
    }

}

// console.log(getHumanChoice())

function playRound(humanChoice, computerChoice){
    if (humanChoice === choices[0] && computerChoice === choices[3]) {
        humanScore++;
        return console.log(`You win! Rock beats scissors. Score: You - ${humanScore}, Computer - ${computerScore}`)
    }
    else if (humanChoice === choices[1] && computerChoice === choices[0]) {
        humanScore++;
        return console.log(`You win! Paper beats rock. Score: You - ${humanScore}, Computer - ${computerScore}`)
    }
    else if (humanChoice === choices[2] && computerChoice === choices[1]) {
        humanScore++;
        return console.log(`You win! Scissors beats paper. Score: You - ${humanScore}, Computer - ${computerScore}`)
    }
    if (computerChoice === choices[0] && humanChoice === choices[3]) {
        computerScore++;
        return console.log(`You lose... Rock beats scissors. Score: You - ${humanScore}, Computer - ${computerScore}`)
    }
    else if (computerChoice === choices[1] && humanChoice === choices[0]) {
        computerScore++;
        return console.log(`You lose... Paper beats rock. Score: You - ${humanScore}, Computer - ${computerScore}`)
    }
    else if (computerChoice === choices[2] && humanChoice === choices[1]) {
        computerScore++;
        return console.log(`You lose... Scissors beats paper. Score: You - ${humanScore}, Computer - ${computerScore}`)
    }
    else {
        return console.log("A tie! Take another turn")
    }
}

//play game 5 times
for (i = 1; i <=5; i++) {
    playRound(getComputerChoice(), getHumanChoice())
}


