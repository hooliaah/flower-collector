$(document).ready(function () {

    // GLOBAL VARIABLES
    // =================================================================
    // random number and current user score set to 0
    var randomNumber = 0;
    var userScore = 0;

    // number wins and losses counters
    var numberWins = 0;
    var numberLosses = 0;

    // flower variables
    var flowers = {
        pink: {
            name: "Pink",
            value: 0
        },
        purple: {
            name: "Purple",
            value: 0
        },
        blue: {
            name: "Blue",
            value: 0
        },
        rainbow: {
            name: "Rainbow",
            value: 0
        },
    };

    // FUNCTIONS
    // =================================================================

    // cursor gif display on hover
    var i = false;
    (function cursor() {
        $(".flower").css("cursor", (i = !i) ? 'url("assets/images/cursor1.png"), auto' : 'url("assets/images/cursor2.png"), auto');
        setTimeout(cursor, 100);
    })();

    // function to get random numbers
    var getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // function to start the game
    var startGame = function () {

        // wins and losses updated at start of new game
        $("#wins").text(numberWins);
        $("#losses").text(numberLosses);

        // set and display current user score to 0 at beginning of game
        userScore = 0;
        $("#your-score").text(userScore);

        // set and display random number target
        randomNumber = getRandom(19, 120);
        $("#random-number").text(randomNumber);

        // set flower values
        flowers.pink.value = getRandom(1, 12);
        flowers.purple.value = getRandom(1, 12);
        flowers.blue.value = getRandom(1, 12);
        flowers.rainbow.value = getRandom(1, 12);
    };

    // call startGame to initiate game
    startGame();

    // function to determine if user has won or lost
    var checkGameEnd = function () {
        // determine if userScore is greater than randomNumber
        if (userScore > randomNumber) {

            // alert user that they lost
            $("#win-loss").text("You lost. Try to match the new number.");

            // increase loss counter
            numberLosses += 1;

            // restart the game
            startGame();

            // determine if userScore is equal to randomNumber
        } else if (userScore === randomNumber) {

            // alert user that they won
            $("#win-loss").text("You won!! Try to match the new number.");

            // increase win counter
            numberWins += 1;

            // restart the game
            startGame();
        }
    };

    // Function to add values when flowers clicked
    var updateScore = function (clickedFlower) {

        // add flower value to current userScore
        userScore += clickedFlower.value;

        // display current score
        $("#your-score").text(userScore);

        // alert the user to keep guessing
        $("#win-loss").text("Keep guessing. Try to match the random number.");

        // see if user won or lost
        checkGameEnd();
    };


    // on-click functions, the total score increases by the value of the flower when clicked
    $("#pink-flower").click(function () {
        updateScore(flowers.pink);
    });

    $("#purple-flower").click(function () {
        updateScore(flowers.purple);
    });

    $("#blue-flower").click(function () {
        updateScore(flowers.blue);
    });

    $("#rainbow-flower").click(function () {
        updateScore(flowers.rainbow);
    });

});