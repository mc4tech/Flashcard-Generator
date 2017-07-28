var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");
var cardInfo = require("./basic.json");
var cardArr = [];
var score = 0;
var indexCount = 0;

//builds the cards and pushes into cardArr
function buildCards() {

  var currentCard = "";

  for (var i = 0; i < cardInfo.length; i++) {
    currentCard = new BasicCard(cardInfo[i].front, cardInfo[i].back);
    cardArr.push(currentCard);
  }
  //calls the startGame function and passes args
  startGame(score, cardArr, indexCount);
}

function startGame(score, cardArray, indexCount) {
  // tests if there are more questions to ask
  if (indexCount < cardArray.length) {
    promptUser(cardArray, indexCount, score);
  }else {
    console.log("Game Over!\nYour score is : " + score);
  }
}

function promptUser(cardArray, indexCount, score) {

  var card = cardArray[indexCount];
  //tells the user the card/question #
  console.log("\nQuestion " + (indexCount + 1));
  // Asks the user the question on front of the card
  inquirer.prompt([{
    type: "input",
    name: "text",
    message: card.front + "\nAnswer:"
  }]).then(function(answer) {

    if (answer.text.trim().toLowerCase() === card.back.trim().toLowerCase()) {
      score++;
      console.log("That's right! Keep it up!" + "\n");
    }else {
      // Otherwise let them know they were incorrect
      console.log("Wrong! The correct answer is '" + card.back + "'." + "\n");
    }
    
    indexCount++;
    
    startGame(score, cardArray, indexCount);
  });
}


// calling the buildCards function to start the game
buildCards();
