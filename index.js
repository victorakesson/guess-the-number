function randomInt(n) {
return  Math.floor(Math.random() * n)

}

const secretNumber = randomInt(100)

console.log(secretNumber)

function getUserGuess() {
const guess = document.getElementById("user-input").value
return parseInt(guess, 10) 
}



document.addEventListener("keyup", function (tryck) {
if (tryck.key === "enter") {
const number = Getnummer()
console.log(number)
}
})

function setMessage(msg) {
const txt = document.getElementById('message').innerText = "Fel"
if 
    
}

