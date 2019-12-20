let playerScore = 0;
let compScore = 0;
const rps = ["rock", "paper", "scissors"];
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let text2 = document.querySelector('#text2');
let text1 = document.querySelector('#text1');
let startButton = document.querySelector('#start');
let myChoice;

rock.addEventListener('click', () => {
    myChoice = "Rock";
    rock.style.cssText = 'background-color: rgb(34, 146, 211)';
    scissors.style.cssText = 'background-color: rgb(148, 130, 153)';
    paper.style.cssText = 'background-color: rgb(148, 130, 153)';
});
paper.addEventListener('click', () => {
    myChoice = "Paper";
    paper.style.cssText = 'background-color: rgb(34, 146, 211)';
    scissors.style.cssText = 'background-color: rgb(148, 130, 153)';
    rock.style.cssText = 'background-color: rgb(148, 130, 153)';
});
scissors.addEventListener('click', () => {
    myChoice = "Scissors";
    scissors.style.cssText = 'background-color: rgb(34, 146, 211)';
    rock.style.cssText = 'background-color: rgb(148, 130, 153)';
    paper.style.cssText = 'background-color: rgb(148, 130, 153)';
});

startButton.addEventListener('click', () => {
    start();
    rock.style.cssText = 'background-color: rgb(148, 130, 153)';
    paper.style.cssText = 'background-color: rgb(148, 130, 153)';
    scissors.style.cssText = 'background-color: rgb(148, 130, 153)';
});

// v0.0.01
// function getMyChoice() {
//     return (myChoice = prompt("Choose your weapon"));
// }



function weStillPlayin() {
    if (playerScore < 5 && compScore < 5) {
        text2.textContent = "Keep Playing!";
    } else if ((playerScore = 5)) {
        text2.textContent = "You win, nice!";
        playerScore = 0;
        omputerScore = 0;
    } else if ((compScore = 5)) {
        text2.textContent = "Computer Wins!";
        playerScore = 0;
        computerScore = 0;
    }
};

function opponentChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    return rps[randomNum].toUpperCase();
};

function checkForWeapon() {
    if (myChoice === undefined) {
        text2.textContent = "Please Select a Weapon Before Beginning Battle!";
    } else {
        opponentChoice();
    };
};

function play() {
    let computerChoice = opponentChoice();

    function rock() {
        if (computerChoice === "SCISSORS") {
            playerScore++;
            text1.textContent =
                "Nice, your score is " +
                playerScore +
                ". Opponent had " +
                computerChoice +
                ".";
        } else if (computerChoice === "PAPER") {
            compScore++;
            text1.textContent =
                "Woops, your score is " +
                playerScore +
                ". Your opponent has " +
                computerChoice +
                " & " +
                compScore +
                " points.";
        } else if (computerChoice === "ROCK") {
            text1.textContent = "Draw! Try Again!";
        }
    };

    function scissors() {
        if (computerChoice === "PAPER") {
            playerScore++;
            text1.textContent =
                "Nice, your score is " +
                playerScore +
                ". Opponent had " +
                computerChoice +
                ".";
        } else if (computerChoice === "ROCK") {
            compScore++;
            text1.textContent =
                "Woops, your score is " +
                playerScore +
                ". Your opponent has " +
                computerChoice +
                " & " +
                compScore +
                " point.";
        } else if (computerChoice === "SCISSORS") {
            text1.textContent = "Draw! Try Again!";
        }
    }

    function paper() {
        if (computerChoice === "ROCK") {
            playerScore++;
            text1.textContent =
                "Nice, your score is " +
                playerScore +
                ". Opponent had " +
                computerChoice +
                ".";
        } else if (computerChoice === "SCISSORS") {
            compScore++;
            text1.textContent =
                "Woops, your score is " +
                playerScore +
                ". Your opponent has " +
                computerChoice +
                " & " +
                compScore +
                " point.";
        } else if (computerChoice === "PAPER") {
            text1.textContent = "Draw! Try Again!";
        }
    }

    if (myChoice === "Rock") {
        rock();
    } else if (myChoice === "Paper") {
        paper();
    } else if (myChoice === "Scissors") {
        scissors();
    };

    weStillPlayin();
};



function start() {
    checkForWeapon();
    play();

};