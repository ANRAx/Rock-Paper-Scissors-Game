// create an array that stores computer choices
var comChoice = ["r", "p", "s"];
// create variables that store score (wins, losses, ties)
var wins = 0;
var losses = 0;
var ties = 0;
// create variables that reference our display windows for score
var winsNum = document.getElementById("winsNum");
var tiesNum = document.getElementById("tiesNum");
var lossNum = document.getElementById("lossNum");
// write a function that runs whenever the user presses a key
document.onkeyup = function(event) {
    // create a variable the stores the key pressed by user
    var userGuess = event.key;
    // create a variable that chooses a choice made random from our comChoice array
    var comGuess = comChoice[Math.floor(Math.random() * comChoice.length)];
}

