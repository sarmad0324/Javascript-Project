//document.getElementById("count").innerText=10
let count = 0
let name="Sarmad"
let msg= " Welcome back!"
let greet=name+msg

let Wel=document.getElementById("wel")
Wel.innerText= greet

let Count= document.getElementById("count")

let Save = document.getElementById("save")

function inc(){
   count += 1 
   Count.innerText=count 
}
function save(){
    let text= count +" - "
    Save.textContent  +=  text
    count=0
    Count.innerText=count
}

//game
/*let hand = ["rock", "paper", "scissor"]
function get(){
   let randonIndex = Math.floor(Math.random() * 3 )
   return hand[randonIndex]
}
console.log( get() )*/
