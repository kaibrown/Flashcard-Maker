var basiccard = require("./BasicCard.js");
var clozecard = require("./ClozeCard.js");
var deckofcards = require("./Deck.json");
var fs = require("fs");
var inquirer = require("inquirer");


// inquirer basic or clozed

function typeOfCard (){

 inquirer.prompt([
      {
          name: "question",
          message: "Do you want basic or clozed cards?",
          type: "list",
          choices: ["basic", "clozed"]
      }

 ]).then(function(answer){

    if (answer.question === "basic"){
        BasicCards();
    } else{ 
        ClozedCards();
    }

 })     

};

// if basic --> cycle through front of basic cards 

function BasicCards(){
    console.log("hit basic cards")
    // display the front of the card -->
    // through an array that can be called in the "message"
    //  using inquirer for the input
    // check if the input if correct 
};

function ClozedCards(){
    console.log("hit clozed cards")
    // this.preparedQuestion = (this.question).replace(this.cloze, "......")
};
// wait for user input to check if correct 
// if correct : CONGRATS message + fire the next card
//  else wrong : Wrong message and tell answer + fire the next card

// loop through all of the questions
// total of right and wrong answers 

// inquirer : do you want play again?
// if yes: start again
//  if no: exit program



typeOfCard();