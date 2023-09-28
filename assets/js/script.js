// VARIABLES
const choices = [
    {
        id: 1,
        name: "Rock",
        image: "assets/images/Rock.jpg"
    },
    {
        id: 2,
        name: "Paper",
        image: "assets/images/paper.jpg"
    },
    {
        id: 3,
        name: "Scissors",
        image: "assets/images/scissors.jpg"
    }];

let playerChoiceImg = document.querySelector("#playerChoiceImg");

let computerChoiceImg = document.querySelector("#computerChoiceImg");

// Complete logic of game inside this function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


    // Function to 
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;


                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                // Function to check who wins
                winner(this.innerText, computerChoice);

                // Calling gameOver function after 10 moves
                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            });
        });

    };


