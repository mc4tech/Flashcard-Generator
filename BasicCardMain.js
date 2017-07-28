var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var cardInfo = require("./cardInfo.json");
var cardArr = [];
var score = 0;
var indexCount = 0;
var card;


function chooseType(){
  inquirer.prompt([
    {
      type: "list",
      message: "Which type of flashcards do you want?",
      choices: ["Basic Card", "Cloze Card"],
      name: "cardType"
    }
  ]).then(function(appData) {
    var cardType = appData.cardType;
    // console.log("Type : " + cardType);
    buildCards(cardType);
  })
}

//builds the cards and pushes into cardArr
function buildCards(type) {
  
  var currentCard = "";
  
  // console.log("type: " + type);
  if(type === "Basic Card") {  
    // side = "front";
    for (var i = 0; i < cardInfo.length; i++) {
      if(cardInfo[i].type === "BasicCard") {
        currentCard = new BasicCard(cardInfo[i].front, cardInfo[i].back);
        cardArr.push(currentCard);
         // console.log(currentCard);
      }
    };
     
  }else{
    side = "text";
    for (var i = 0; i < cardInfo.length; i++) {
      if(cardInfo[i].type === "ClozeCard") {
        currentCard = new ClozeCard(cardInfo[i].text, cardInfo[i].cloze);
        cardArr.push(currentCard.clozeRemoved());
        console.log(cardArr);
      }
    };

  }

  
  //calls the startGame function and passes args
  startGame(type);
}

function startGame(type) {
  // tests if there are more questions to ask
  if (indexCount < cardArr.length) {
    promptUser(type);
  }else {
    console.log("Game Over!\nYour score is : " + score);
  }
}

function promptUser(type) {
 
  if(type === "Basic Card"){
    card = cardArr[indexCount];
    var current = card.front;
  } else{
    card = cardArr[indexCount];
    var current = card.text;
  }

  // var card =cardArr[indexCount];
  //tells the user the card/question #
  console.log("\nQuestion " + (indexCount + 1));
  // Asks the user the question on front of the card
  inquirer.prompt([{
    type: "input",
    name: "text",
    message: current + "\nAnswer:"
  }]).then(function(answer) {

    // if(err) throw err;

    if (answer.text.trim().toLowerCase() === card.back.trim().toLowerCase()) {
      score++;
      console.log("That's right! Keep it up!" + "\n");
    }else {
      // Otherwise let them know they were incorrect
      console.log("Wrong! The correct answer is '" + card.back + "'." + "\n");
    }
    
    indexCount++;
    
    startGame(type);
  });
}


// calling the buildCards function to start the game
// buildCards();
chooseType();
