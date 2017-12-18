$(document).ready(function() {

//variables
var randomNumber = Math.floor(Math.random() * 102 + 19);
    // console.log(randomNumber);
var userScore = 0;
var pinkNumber = Math.floor(Math.random() * 12 +1);
    // console.log(pinkNumber);
var purpleNumber = Math.floor(Math.random() * 12 +1);
    // console.log(purpleNumber);
var blueNumber = Math.floor(Math.random() * 12 +1);
    // console.log(blueNumber);
var rainbowNumber = Math.floor(Math.random() * 12 +1);
    // console.log(rainbowNumber);
var numberWins = 0;
var numberLosses = 0;

//computer picks and displays random number
$("#random-number").text(randomNumber);

//when a flower image is clicked, the total score increases by the value of the flower.
$("#pink-flower").on("click", function(){
    $("#win-loss").text("");
    userScore = userScore + pinkNumber;
    $("#your-score").text(userScore);
    if(userScore > randomNumber){
        loss();
    }
    if(userScore === randomNumber){
        win();
    }
});

$("#purple-flower").on("click", function(){
    $("#win-loss").text("");
    userScore = userScore + purpleNumber;
    $("#your-score").text(userScore);
    if(userScore > randomNumber){
        loss();
    }
    if(userScore === randomNumber){
        win();
    }
});

$("#blue-flower").on("click", function(){
    $("#win-loss").text("");
    userScore = userScore + blueNumber;
    $("#your-score").text(userScore);
    if(userScore > randomNumber){
        loss();
    }
    if(userScore === randomNumber){
        win();
    }
});

$("#rainbow-flower").on("click", function(){
    $("#win-loss").text("");
    userScore = userScore + rainbowNumber;
    $("#your-score").text(userScore);
    if(userScore > randomNumber){
        loss();
    }
    if(userScore === randomNumber){
        win();
    }
});

//function to end game when the user wins
function win(){
    $("#win-loss").text("You win!!");
    numberWins += 1;
    $("#wins").text(numberWins);
    reset();
};

//function to end game when the user loses
function loss(){
    $("#win-loss").text("You lost!!");
    numberLosses += 1;
    $("#losses").text(numberLosses);
    reset();
};

//function to reset the game
function reset(){
    randomNumber = Math.floor(Math.random() * 102 + 19);
// console.log("reset # " + randomNumber);
    $("#random-number").text(randomNumber);
    userScore = 0;
    $("#your-score").text(userScore);
    pinkNumber = Math.floor(Math.random() * 12 +1);
// console.log("reset pink " + pinkNumber);
    purpleNumber = Math.floor(Math.random() * 12 +1);
// console.log("reset purple " + purpleNumber);
    blueNumber = Math.floor(Math.random() * 12 +1);
// console.log("reset blue " + blueNumber);
    rainbowNumber = Math.floor(Math.random() * 12 +1);
// console.log("reset rainbow " + rainbowNumber);
}

});