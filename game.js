let playerScore = 0;
let compScore = 0;
const rps = ['rock', 'paper', 'scissors'];
let randomNum = Math.floor(Math.random() * 3);

//let myChoice = prompt("Choose your weapon...(rock, paper or scissors)");

let myChoice = "rock";
let myChoiceUp = myChoice.toUpperCase();

function play(myChoice) {

    function opponent() {
        return rps[randomNum].toUpperCase();
    };
    let computerChoice = opponent();

    if (myChoiceUp === "ROCK") {

        if (computerChoice === "SCISSORS") {
            playerScore++;
            console.log('Nice, your score is ' + playerScore + '. Opponent had ' + computerChoice + '.')
        } else if (computerChoice === "PAPER") {
            compScore++;
            console.log('Woops, your score is ' + playerScore + '. Your opponent has ' +
                computerChoice + ' & ' +
                compScore + ' points.');
        } else if (computerChoice === 'ROCK') {
            console.log("Draw! Try Again!");
        };

    };

    if (myChoiceUp === "SCISSORS") {

        if (computerChoice === "PAPER") {
            playerScore++;
            console.log('Nice, your score is ' + playerScore + '. Opponent had ' + computerChoice + '.')
        } else if (computerChoice === "ROCK") {
            compScore++;
            console.log('Woops, your score is ' + playerScore + '. Your opponent has ' +
                computerChoice + ' & ' +
                compScore + ' point.')
        } else if (computerChoice === 'SCISSORS') {
            console.log("Draw! Try Again!");
        }

    };

    if (myChoiceUp === "PAPER") {

        if (computerChoice === "ROCK") {
            playerScore++;
            console.log('Nice, your score is ' + playerScore + '. Opponent had ' + computerChoice + '.')
        } else if (computerChoice === "SCISSORS") {
            compScore++;
            console.log('Woops, your score is ' + playerScore + '. Your opponent has ' +
                computerChoice + ' & ' +
                compScore + ' point.')
        } else if (computerChoice === 'PAPER') {
            console.log("Draw! Try Again!");
        }
    };

};

if (playerScore < 5 || compScore < 5) {
    console.log("Keep Playing!")
} else if (playerScore = 5) {
    console.log("You win, nice!");
    let playerScore = 0;
} else {
    console.log("Computer Wins!");
    let computerScore = 0;
};

/*while (playerScore < 5 || compScore < 5) {
    prompt("Choose your weapon...(rock, paper or scissors)");
    play(myChoice);
};
*/