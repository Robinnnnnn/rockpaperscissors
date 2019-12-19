let playerScore = 0;
let compScore = 0;
const rps = ["rock", "paper", "scissors"];
var myChoiceUp;
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let myChoice;

function getMyChoice() {
    return (myChoice = prompt("Choose your weapon"));
}

function weStillPlayin() {
    if (playerScore < 5 && compScore < 5) {
        console.log("Keep Playing!");
    } else if ((playerScore = 5)) {
        console.log("You win, nice!");
        playerScore = 0;
        omputerScore = 0;
    } else if ((compScore = 5)) {
        console.log("Computer Wins!");
        playerScore = 0;
        computerScore = 0;
    }
}

function opponentChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    return rps[randomNum].toUpperCase();
}

function play() {
    let computerChoice = opponentChoice();
    myChoice = myChoice.toUpperCase();

    //Run when I choose rock

    function rock() {
        if (computerChoice === "SCISSORS") {
            playerScore++;
            console.log(
                "Nice, your score is " +
                playerScore +
                ". Opponent had " +
                computerChoice +
                "."
            );
        } else if (computerChoice === "PAPER") {
            compScore++;
            console.log(
                "Woops, your score is " +
                playerScore +
                ". Your opponent has " +
                computerChoice +
                " & " +
                compScore +
                " points."
            );
        } else if (computerChoice === "ROCK") {
            console.log("Draw! Try Again!");
        }
    }

    //Run when I choose scissors
    function scissors() {
        if (computerChoice === "PAPER") {
            playerScore++;
            console.log(
                "Nice, your score is " +
                playerScore +
                ". Opponent had " +
                computerChoice +
                "."
            );
        } else if (computerChoice === "ROCK") {
            compScore++;
            console.log(
                "Woops, your score is " +
                playerScore +
                ". Your opponent has " +
                computerChoice +
                " & " +
                compScore +
                " point."
            );
        } else if (computerChoice === "SCISSORS") {
            console.log("Draw! Try Again!");
        }
    }

    //Run when I choose paper
    function paper() {
        if (computerChoice === "ROCK") {
            playerScore++;
            console.log(
                "Nice, your score is " +
                playerScore +
                ". Opponent had " +
                computerChoice +
                "."
            );
        } else if (computerChoice === "SCISSORS") {
            compScore++;
            console.log(
                "Woops, your score is " +
                playerScore +
                ". Your opponent has " +
                computerChoice +
                " & " +
                compScore +
                " point."
            );
        } else if (computerChoice === "PAPER") {
            console.log("Draw! Try Again!");
        }
    }

    if (myChoice === "ROCK") {
        rock();
    } else if (myChoice === "PAPER") {
        paper();
    } else if (myChoice === "SCISSORS") {
        scissors();
    }

    weStillPlayin();
}

function start() {
    getMyChoice();
    opponentChoice();
    play();
}

let rovi = () => {};