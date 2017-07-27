var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");
var cardObj = {};
var score = 0;


function buildCards() {
  cardObj.firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

  // "Who was the first president of the United States?"
  console.log(cardObj.firstPresident.front); 

  // "George Washington"
  console.log(cardObj.firstPresident.back); 

  cardObj.CowboysSB = new BasicCard("How many Superbowls have the Cowboys won?", "5");
  console.log(cardObj.CowboysSB.front);
  console.log(cardObj.CowboysSB.back);

  cardObj.gaCapital = new BasicCard("What's the capital of Georgia?", "Atlanta");

}

function startGame() {
  buildCards();
 //onsole.log("length" + cardObj.length);
//onsole.log(cardObj[1].BasicCard.front);
}
startGame();
console.log(cardObj[1](BasicCard.front));