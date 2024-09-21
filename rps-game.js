const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {

    // times random (0 to 1) by the length of array and get floor, 
    //giving the values, 0,1 or 2 - represents the choices!
    let cpChoice = Math.floor(Math.random() * choices.length)

    return choices[cpChoice]
}

// console.log(getComputerChoice())

