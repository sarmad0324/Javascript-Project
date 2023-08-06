//game  Rock Paper Scissors
/*let hand = ["rock", "paper", "scissor"]
function get(){
   let randonIndex = Math.floor(Math.random() * 3 )
   return hand[randonIndex]
}
console.log( get() )


// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'

function getComputerChoice() {
    const hand = ["rock", "paper", "scissor"]
    let random = Math.floor(Math.random() * 3 )
    return hand[random]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(p_choice, c_choice) {
  // return the result of score based on if you won, drew, or lost
  let score;

  if(p_choice == c_choice){
    score=0
  }else if(p_choice == "rock" && c_choice == 'scissor' ){
    score = 1
  }else if(p_choice == "scissor" && c_choice == 'paper' ){
    score = 1
  }else if(p_choice == "paper" && c_choice == 'rock' ){
    score = 1
  }else{
    score = -1 
  }
  return score
}
// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // use querySelector to select all RPS Buttons
    let button= document.querySelectorAll('.rpsButton')
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
    button.forEach(button.onClick => {
        
    });
  
   
  
    // Add a click listener to the end game button that runs the endGame() function on click
    
  }

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {

  
}

// ** endGame function clears all the text on the DOM **


playGame()*/
function getComputerChoice() {
    const hand = ["rock", "paper", "scissor"]
    let random = Math.floor(Math.random() * 3)
    return hand[random]
}

function getuser(input) {
    let p_choice = input
    let c_choice = getComputerChoice()
    let score;

    if (p_choice == c_choice) {
        score = 0
    } else if (p_choice == "rock" && c_choice == 'scissor') {
        score = 1
    } else if (p_choice == "scissor" && c_choice == 'paper') {
        score = 1
    } else if (p_choice == "paper" && c_choice == 'rock') {
        score = 1
    } else {
        score = -1
    }
    let result = document.getElementById('result')
    switch (score) {
        case -1:
            result.innerText = `You Lose!`
            break;
        case 0:
            result.innerText = `It's a Draw!`
            break;
        case 1:
            result.innerText = `You Win!`
            break;
    }

    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText = score //`${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${p_choice} vs 🤖 ${c_choice}`
}
function endGame() {
let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}
