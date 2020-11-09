function randomInt(n){
   return Math.floor(Math.random() * n) + 1 
}

const secretNumber = randomInt(100)
console.log(secretNumber)

function getUserGuess(){
     const guess = document.getElementById("user-input").value
     return parseInt(guess, 10) 
}



document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if (secretNumber === getUserGuess()){
            setMessage("Well Done!")
        } else if (secretNumber > getUserGuess()) {
            setMessage("Too low")
        } else if (secretNumber < getUserGuess()) {
            setMessage("Too high")
        }
         document.getElementById("user-input").value = ""
    }
    const guesses = []
    guesses.push(getUserGuess())
    console.log(guesses)

})

function setMessage(msg){
    document.getElementById("message").innerText = msg
}










