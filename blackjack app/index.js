//app

 //array for storing cards
let cards=[] 
// variable
let massage ="" //string
let sum = 0   //integer
// boolean
let blackjack = false 
let isalive= false
//objects
let player = {
   name : "Sarmad:",
   money : 180
}

//selecting DOM
let massageEl = document.getElementById("massage-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " $" + player.money

//user-defined function 
function startGame() {
   isalive = true
   let card1 = randomcard()
   let card2 = randomcard()
   cards = [card1, card2]
   sum = card1 + card2
   start_again()
}

function randomcard(){
   // MATH built-in function
   let random = Math.floor(Math.random() * 13) + 1 
   //if-else (conditional operator)
   if(random>10){
      return 10
   }else if(random===1){
      return 11
   }else{
      return random
   }
}

function start_again() {

   cardEl.textContent = "Cards : " 
   //for loop
   for(let i=0; i< cards.length ; i++){
      cardEl.textContent += cards[i] + " "
   }
   sumEl.innerText = "Sum : " + sum

   if (sum < 21) {
      massage = ("Do you want to draw a new card? ")
   }
   else if (sum === 21) {
      massage = ("whoo! you have won blackjack! ")
      blackjack = true
   }
   else {
      massage = ("you were out of the game ! ")
      isalive = false
   }
   massageEl.textContent = massage
}

function newcard() {
   //if-else (logical operator)
   if (isalive === true && blackjack === false){
      const newcard = randomcard()
      sum += newcard
      cards.push(newcard)
      start_again()
   }
}

// for (let i=0; i < arr.length; i++){
//    console.log(arr[i])
// }
// console.log(arr) 