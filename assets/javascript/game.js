var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var playerPick = [];
var compPick = null;
var allGuesses = 9;
var guessesRemain = 9;
var wins = 0;
var losses = 0;


var updateGuessesRemain = function() {
    document.querySelector("#guesses-left").innerHTML = guessesRemain;
};



let updateCompPick = function() {
    this.compPick = this.letters[Math.floor(Math.random() * this.letters.length)];
    console.log("compuer picks" + " " + compPick);

};

let updateGuessedLetters = function() {
    document.querySelector("#guesses-so-far").innerHTML = playerPick.join(", ");
};

var reset = function() {

    allGuesses = 9;
    guessesRemain = 9;
    playerPick = [];
    updateCompPick();
    updateGuessesRemain();
    updateGuessedLetters();
};

updateCompPick();
updateGuessesRemain();

document.onkeyup = function(event) {
    guessesRemain--;

    var lowercaseLetter = String.fromCharCode(event.keyCode).toLowerCase();

    playerPick.push(lowercaseLetter);
    console.log(playerPick);

    updateGuessesRemain();
    updateGuessedLetters();

    if (lowercaseLetter === compPick) {
        alert(compPick + " " + "is correct! You are definitely psychic...")



        wins++;
        document.querySelector("#wins").innerHTML = wins;


        reset();
    }

    if (guessesRemain == 0) {
        alert("You are NOT psychic! Try again...")
        losses++;
        document.querySelector("#losses").innerHTML = losses;

        reset();

    }

};