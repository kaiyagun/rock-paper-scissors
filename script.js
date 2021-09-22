// rock paper scissors 

// someone enters r p or s 
// and gets a popup response
// if its not r p or s, return early with error message
// counts wins and losses and ties until "cancel" is pressed
// "play again" and "cancel" options

// start with prompt("Enter R, P, or S: ");
// if response !== r && repsonse !== s && response !== p then return
// r p and s in an array
// Math.floor(Math.random()*3) 
// compare user response to computer generated one
// function accepts user & computer response, outputs result
// if user R, computer P then computer wins &etc

//TODO: prompt user to choose r p or s, save answer to variable
    //what if other value
    //whaat abt lower/uppercase

//TODO: generate computer choice
    //three outcomes r p or s 
    //randomly choose one
    //save as a variable

//TODO: compare choices
    //win
        //user rock, comp scissors || user paper comp rock || user scissors comp paper
    //loss
        //comp rock user scissors || comp paper user rock || comp scissors userrs paper
    //tie
        //duh
    
//TODO: show result
    //popup

//TODO: show cumulative score
    //tracks across games

//TODO: ask to play again
    //start from top




var win = 0;

var loss = 0;

var tie = 0;

game();

function game() {
    
    var input = prompt("Enter R, P, or S: ").toUpperCase(); 

    if (input !== "R" && input !== "P" && input !== "S") {
        alert("Please enter a valid response. " + input);
        return;
    }

    var compArray = ["R", "P", "S"];

    var comp = compArray[Math.floor(Math.random()*3)];

    if ((input === "R" && comp === "S") || (input === "P" && comp === "R") || (input === "S" && comp === "P")) {
        alert("You win! Nice!");
        win += 1;
    }

    else if ((input === "S" && comp === "R") || (input === "P" && comp === "S") || (input === "R" && comp === "P")) {
        alert("You lose sucker!");
        loss += 1;
    }

    else {
        alert("Tie!");
        tie += 1;
    }

    alert(`Scoreboard:
        Wins: ${win}
        Losses: ${loss}
        Ties: ${tie}`);
    
    var restart = confirm("Restart?");
    if (restart) {
        game();
    }
}
