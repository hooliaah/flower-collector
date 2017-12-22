$(document).ready(function() {

//variables
var randomNumber = Math.floor(Math.random() * 102 + 19);
var userScore = 0;
var pinkNumber = Math.floor(Math.random() * 12 +1);
var purpleNumber = Math.floor(Math.random() * 12 +1);
var blueNumber = Math.floor(Math.random() * 12 +1);
var rainbowNumber = Math.floor(Math.random() * 12 +1);
var numberWins = 0;
var numberLosses = 0;

//cursor gif display on hover
var i = false;
(function cursor(){
  $(".flower").css("cursor", (i = !i) ? 'url("assets/images/cursor1.png"), auto' : 'url("assets/images/cursor2.png"), auto');
  setTimeout(cursor, 100);
})();

//computer picks and displays random number
$("#random-number").text(randomNumber);

//wins and losses displayed as 0 at beginning of game
$("#wins").text(numberWins);
$("#losses").text(numberLosses);

//when a flower image is clicked, the total score increases by the value of the flower.
$("#pink-flower").on("click", function(){
    $("#win-loss").text("Try to match the random number.");
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
    $("#win-loss").text("Try to match the random number.");
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
    $("#win-loss").text("Try to match the random number.");
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
    $("#win-loss").text("Try to match the random number.");
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
    $("#win-loss").text("You won!! Try to match the new number.");
    numberWins += 1;
    $("#wins").text(numberWins);
    reset();
};

//function to end game when the user loses
function loss(){
    $("#win-loss").text("You lost. Try to match the new number.");
    numberLosses += 1;
    $("#losses").text(numberLosses);
    reset();
};

//function to reset the game
function reset(){
    randomNumber = Math.floor(Math.random() * 102 + 19);
    $("#random-number").text(randomNumber);
    userScore = 0;
    $("#your-score").text(userScore);
    pinkNumber = Math.floor(Math.random() * 12 +1);
    purpleNumber = Math.floor(Math.random() * 12 +1);
    blueNumber = Math.floor(Math.random() * 12 +1);
    rainbowNumber = Math.floor(Math.random() * 12 +1);
}

});