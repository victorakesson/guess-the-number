function randomInt(n) {
   return  Math.floor(Math.random() * n) + 1 
}

const secretNumber = randomInt(100)
console.log(secretNumber)

function getUserGuess(){
     const guess = document.getElementById("user-input").value
     return parseInt(guess, 10) 
}



document.addEventListener("keyup", function (event) {
    if (event.key === "enter") {
        if (randomNumber === getUserGuess()){
            setMessage("Well Done!")
        } else if (randomNumber > getUserGuess()) {
            setMessage("Too low")
        } else if (randomNumber < getUserGuess()) {
            setMessage("Too high")
        }
         document.getElementById("user-input").value = " "
    
}

function setMessage(msg){
    document.getElementById("message").innerText = msg
}

