function getRandomNumber() {
    return parseInt(Math.random() * (10 - 1) + 1);
}

function verificationNumber(userNumber, randomNumber) {
    if (userNumber == randomNumber) {
        return "Você acertou!"
    } else {
        distanceFromNumber(userNumber, randomNumber)

        return "Você errou!"
    }
}

function distanceFromNumber(userNumber, randomNumber) {
    gap = ((userNumber - randomNumber) ** 2) ** 0.5

    if (gap < 3) {
        return "Morno"
    } else if (gap < 2) {
        return "Quente"
    } else if (gap < 1) {
        return "Muito quente"
    }
}

function game() {
    let randomNumber = getRandomNumber()
    console.log(randomNumber)

    let userNumber = document.getElementById("userInput")

    result = verificationNumber(userNumber, randomNumber)
}

game()