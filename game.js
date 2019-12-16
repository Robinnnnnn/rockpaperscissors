let playerScore = 0;
let compScore = 0;
const rps = ['rock', 'paper', 'scissors'];
let randomNum = Math.floor(Math.random() * 3);
let myChoice = 'rock';
let myChoiceUp = myChoice.toString().toUpperCase();

//Lets user know to play to 5, @ 5points, scores reset.
function weStillPlayin() {
    if (playerScore < 5 && compScore < 5) {
        console.log("Keep Playing!")
    } else if (playerScore = 5) {
        console.log("You win, nice!");
        let playerScore = 0;
        let computerScore = 0;
    } else {
        console.log("Computer Wins!");
        let playerScore = 0;
        let computerScore = 0;
    };
};

console.log('Declare your choice --> myChoice = **** , then type play()');

function play(myChoiceUp) {

    function opponent() {
        return rps[randomNum].toUpperCase();
    };
    let computerChoice = opponent();


    if (myChoiceUp === 'ROCK') {
        rock();
    } else if (myChoiceUp === 'PAPER') {
        paper();
    } else {
        scissors();
    };

    //Run when I choose rock
    function rock() {
        if (computerChoice === "SCISSORS") {
            playerScore++;
            console.log('Nice, your score is ' + playerScore + '. Opponent had ' + computerChoice + '.')
        } else if (computerChoice === "PAPER") {
            compScore++;
            console.log('Woops, your score is ' + playerScore + '. Your opponent has ' +
                computerChoice + ' & ' +
                compScore + ' points.');
        } else {
            console.log("Draw! Try Again!");
        };
    };

    //Run when I choose scissors
    function scissors() {
        if (computerChoice === "PAPER") {
            playerScore++;
            console.log('Nice, your score is ' + playerScore + '. Opponent had ' + computerChoice + '.')
        } else if (computerChoice === "ROCK") {
            compScore++;
            console.log('Woops, your score is ' + playerScore + '. Your opponent has ' +
                computerChoice + ' & ' +
                compScore + ' point.')
        } else {
            console.log("Draw! Try Again!");
        };
    };

    //Run when I choose paper
    function paper() {
        if (computerChoice === "ROCK") {
            playerScore++;
            console.log('Nice, your score is ' + playerScore + '. Opponent had ' + computerChoice + '.')
        } else if (computerChoice === "SCISSORS") {
            compScore++;
            console.log('Woops, your score is ' + playerScore + '. Your opponent has ' +
                computerChoice + ' & ' +
                compScore + ' point.')
        } else {
            console.log("Draw! Try Again!");
        };
    };

    weStillPlayin();
};