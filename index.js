function randomInt() {
return  Math.floor(Math.random() * 100)

}

const secretNumber = randomInt()

console.log(secretNumber)

function getUserGuess() {
const gissning = document.getElementById("user-input").value
return parseInt(gissning, 10)

    
}
