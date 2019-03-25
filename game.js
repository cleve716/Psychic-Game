
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", " j ",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var beginningPicks = 9;
var picksSoFar = [];
//player gets 9 picks -- DONE
//player makes a pick -- DONE console.log
//computer makes a pick -- DONE console.log
//capture picks -- DONE
//show picks -- DONE console.log picksSofar array
//compare picks, determine win or not a win - DONE
//show number of picks left --- DONE
//count wins --DONE
//count losses -- DONE
//reset after win or 9 picks --DONE
var greetingsText = document.getElementById("greetings-text") //variables for links to html page
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var picksLeftText = document.getElementById("picksLeft-text");
var picksSoFarText = document.getElementById("picksSoFar-text");
var getComputerPick = function () { // set as a f
    computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(computerPick);
}
var currentPick = getComputerPick() // selects the computer's pick on startup

document.onkeyup = function (event) {  // This function is run whenever the user presses a key.

    var userPick = event.key;  // Determines which key was pressed.
    console.log(userPick);
    beginningPicks--;
    picksSoFar.push(userPick);
    console.log(picksSoFar);
    greetingsText.textContent = "Pay no attention to the electrodes attached to your head. It's not like you'll receive a debilitating electrical shock if you lose. The kitten in the box next to you, though... that's another story."

    if (userPick === computerPick) {
        wins++;
        currentPick = getComputerPick();
        beginningPicks = 9;
        picksSoFar = [];
        alert("You saved the kitty! ... this time.");
        greetingsText.textContent = "Guess which letter I'm thinking of... for the kitty's sake..."
    }

    if (beginningPicks < 5) {
        greetingsText.textContent = "The kitty isn't nervous or anything... just focus on the task at hand"
    }

    if (beginningPicks < 2) {
        greetingsText.textContent = "It might be best if you try and distract the kitty, so it doesn't see what's coming."
    }

    if (beginningPicks === 0) {
        alert("You are a disgrace to your family! Sorry, kitty ...  :-( ... Click 'OK' to play again")
        beginningPicks = 9;
        losses++;
        picksSoFar = [];
        currentPick = getComputerPick();
        greetingsText.textContent = "Guess which letter I'm thinking of... for the kitty's sake..."
    }
    //greetingsText.textContent= "Pay no attention to the electrodes attached to your head. It's not like you'll receive a debilitating electrical shock if you lose. The kitten in the box next to you, though... that's another story."

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Kitty shocks: " + losses;
    picksLeftText.textContent = "Picks Left: " + beginningPicks;
    picksSoFarText.textContent = "Your Picks So Far: " + picksSoFar.join(", ");


}