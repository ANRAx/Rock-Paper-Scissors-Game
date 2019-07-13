// create an array that stores computer choices
var comChoice = ["r", "p", "s"];
// create variables that store score (wins, losses, ties)
var wins = 0;
var losses = 0;
var ties = 0;
// create variables that reference our display windows for score
    // Scores
var winsNum = document.getElementById("winsNum");
var tiesNum = document.getElementById("tiesNum");
var lossNum = document.getElementById("lossNum");
    // instructions
var instructions = document.getElementById("instructions");

// write a function that runs whenever the user presses a key
document.onkeyup = function(event) {
    // create a variable the stores the key pressed by user
    var userGuess = event.key;
    // create a variable that chooses a choice made random from our comChoice array
    var comGuess = comChoice[Math.floor(Math.random() * comChoice.length)];
    // create the logic that determines the outcome of the game (see readme)
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
        wins++;

        if ((userGuess === "r") && (comGuess === "s")) {    
            wins++;
        } else if ((userGuess === "r") && (comGuess === "p")) {
            losses++;
        } else if ((userGuess === "p") && (comGuess === "s")) {
            losses++;
        } else if ((userGuess === "p") && (comGuess === "r")) {
            wins++;            
        } else if ((userGuess === "s") && (comGuess === "p")) {
            wins++;
        } else if ((userGuess === "s") && (comGuess === "r")) {
            losses++;
        } else if (userGuess === comGuess) {
            ties++;
        }
        // Hides the instructions
        instructions.textContent = "";
        // Display scores
        winsNum.textContent = wins;
        lossNum.textContent = losses;
        tiesNum.textContent = ties;
    }
};
