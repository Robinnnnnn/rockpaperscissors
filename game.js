function play(myChoice) {

    let playerScore = 0;
    let compScore = 0;
    let myChoice = myChoice.toUpperCase();

    const rps = ['rock', 'paper', 'scissors'];

    let randomNum = Math.floor((Math.random() * 3) + 1);

    let computerChoice = rps[randomNum].toUpperCase();

    if (myChoice.toUpperCase === "ROCK") {
        if (computerChoice === "SCISSORS") {
            playerScore++;
        } else if (computerChoice === "PAPER") {
            compScore++;
        } else {
            console.log("Draw! Try Again!");
        }
    };

    if (myChoice.toUpperCase === "SCISSORS") {
        if (computerChoice === "PAPER") {
            playerScore++;
        } else if (computerChoice === "ROCK") {
            compScore++;
        } else {
            console.log("Draw! Try Again!");
        }
    };

    if (myChoice.toUpperCase === "PAPER") {
        if (computerChoice === "ROCK") {
            playerScore++;
        } else if (computerChoice === "SCISSORS") {
            compScore++;
        } else {
            console.log("Draw! Try Again!");
        }
    };

    if (playerScore < 5 || compScore < 5) {
        console.log("Keep Playing!")
    } else if (playerScore = 5) {
        console.log("You win, nice!");
    } else {
        console.log("Computer Wins!");
    }

}