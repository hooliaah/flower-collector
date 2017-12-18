$(document).ready(function() {
//variables
var randomNumber = Math.floor(Math.random() * 102 + 19);
console.log(randomNumber);
var userGuess = 0;
var pinkNumber = Math.floor(Math.random() * 12 +1);
console.log(pinkNumber);
var purpleNumber = Math.floor(Math.random() * 12 +1);
console.log(purpleNumber);
var blueNumber = Math.floor(Math.random() * 12 +1);
console.log(blueNumber);
var rainbowNumber = Math.floor(Math.random() * 12 +1);
console.log(rainbowNumber);

//computer picks and displays random number
$("#random-number").text(randomNumber);

    //user clicks on flowers
        //value of flower clicked is added to user score
        //if value of user score is less than random number, user can keep guessing
        //if value of user score if more than random number, user losses, reset game
        //if value of user score equals random number, user wins, reset game    



});