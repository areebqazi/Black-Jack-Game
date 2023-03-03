
let cards=[]
let sum=0
let hasBlackjack = false
let isAlive = false
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

function startGame(){
  isAlive=true
  let firstcard=getRandomCard()
  let secondcard=getRandomCard()
  cards=[firstcard,secondcard]
  sum=firstcard+secondcard
  renderGame()
}

function renderGame(){
  cardsEl.textContent="Cards : "
  for(let i=0;i<cards.length;i++){
    cardsEl.textContent+=cards[i]+" "
  }
  if(sum<21){
    message="Do you want to draw a new card"
  } else if(sum==21){
    message="Wohoo ! You've got a blackjack !"
    hasBlackjack=true
  } else{
    message="You're out of the game"
    isAlive=false
  }
  messageEl.textContent=message
  sumEl.textContent="Sum : "+sum
}

function newCard(){
    if(isAlive===true && hasBlackjack===false){
     let card=getRandomCard()
     sum+=card
     cards.push(card)
     renderGame()
    } 
}

function getRandomCard(){
    let no= Math.floor(Math.random()*13)+1
    if(no==1)
    return 11
    if(no==11 || no==12 || no==13)
    return 10
    return no
}