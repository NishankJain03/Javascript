let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastresult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let guessRemain = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Guessed number is lesser than one')
    } else if(guess > 100){
        alert('Guessed number is greater than 100')
    } else{
        prevGuess.push(guess)
        if(guessRemain === 11){
            displayGuess(guess)
            displayMessage(`Game Over the Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('you have guessed it right')
        endGame()
    } else if(guess < randomNumber){
        displayMessage('your guess is loww')
    } else if (guess > randomNumber){
        displayMessage('Your guess is high')
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    guessRemain++
    remaining.innerHTML = `${11 - guessRemain}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id=newGame> Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100+1)
        prevGuess = []
        guessRemain = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - guessRemain}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}