const choices = ['rock', 'paper', 'scissors']

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


