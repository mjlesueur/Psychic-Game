var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var randomNumber
var randomLetter
var guessesLeft
var guessesSoFar

var wins = 0;
var losses = 0;

var winsSpan = document.getElementById("wins");
var lossesSpan = document.getElementById("losses");
var guessesLeftSpan = document.getElementById("guessesLeft");
var guessesSoFarSpan = document.getElementById("guessesSoFar")


function reset(){
    console.log(reset);
    randomNumber = Math.floor(Math.random() * 26);
    randomLetter = letter[randomNumber];
    console.log(randomLetter);
    guessesLeft = 13;
    guessesSoFar = [];

    winsSpan.innerText = wins;
    lossesSpan.innerText = losses;
    guessesLeftSpan.innerText = guessesLeft;
    guessesSoFarSpan.innerText = guessesSoFar;
}



reset();

document.onkeyup = function(event){ 
    var playerGuess = event.key;
    if (letter.includes(playerGuess)) {
        if(randomLetter === playerGuess) {
            wins++; 
            reset();

        } 
        else {
            guessesLeft--;
            guessesLeftSpan.innerText = guessesLeft;
            guessesSoFar.push (playerGuess);
            guessesSoFarSpan.innerText = guessesSoFar;
        }
        if(guessesLeft === 0) {
            losses++;
            reset();
        }

    }
}

