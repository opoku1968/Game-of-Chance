// app.js
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

    // Function to decide winner
    const winner = (player, computer) => {

        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();



        if (player == 'rock') {
            playerChoiceImg.src = choices[0].image;
        }
        if (computer == 'rock') {
            computerChoiceImg.src = choices[0].image;
        }
        if (player == 'paper') {
            playerChoiceImg.src = choices[1].image;
        }
        if (computer == 'paper') {
            computerChoiceImg.src = choices[1].image;
        }
        if (player == 'scissors') {
            playerChoiceImg.src = choices[2].image;
        }
        if (computer == 'scissors') {
            computerChoiceImg.src = choices[2].image;
        }


        if (player === computer) {
            result.textContent = 'Tie';

            if (player == 'rock') {
                playerChoiceImg.src = choices[0].image;
            }
            if (computer == 'rock') {
                computerChoiceImg.src = choices[0].image;
            }
            if (player == 'paper') {
                playerChoiceImg.src = choices[1].image;
            }
            if (computer == 'paper') {
                computerChoiceImg.src = choices[1].image;
            }
            if (player == 'scissors') {
                playerChoiceImg.src = choices[2].image;
            }
            if (computer == 'scissors') {
                computerChoiceImg.src = choices[2].image;
            }


        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                // setting image
                // computerChoiceImg.src = choices[1].image;

                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;




            } else {
                // setting image
                // playerChoiceImg.src = choices[0].image;

                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;


            }
        }
        else if (player == 'scissors') {
            if (computer == 'rock') {
                // setting image
                // computerChoiceImg.src = choices[0].image;

                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;


            } else {
                // setting image
                // playerChoiceImg.src = choices[2].image;

                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;


            }
        }
        else if (player == 'paper') {
            if (computer == 'scissors') {
                // setting image
                // computerChoiceImg.src = choices[2].image;

                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;


            } else {
                // setting image
                // playerChoiceImg.src = choices[1].image;

                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;


            }
        }
    };

    // Function to run when game is over
    const gameOver = (playerOptions, movesLeft) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        });


        chooseMove.innerText = 'Game Over!!';
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game';
            result.style.color = '#308D46';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey';
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        });
    };


    // Calling playGame function inside game
    playGame();

};

// Calling the game function
game();