function getRandomNumber() {
    return parseInt(Math.random() * (10 - 1) + 1);
}

function verificationNumber(userNumber, randomNumber) {
    if (userNumber == randomNumber) {
        return "Você acertou!"
    } else {
        return "Você errou!"
    }
}

function distanceFromNumber() {
    // Code here
}

function game() {
    let randomNumber = getRandomNumber()
    console.log(randomNumber)

    let userNumber = document.getElementById("userInput")

    result = verificationNumber(userNumber, randomNumber)
}

game()