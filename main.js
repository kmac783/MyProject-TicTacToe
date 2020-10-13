//console.log('im working');

//There will be two players to start the game.
let currentPlayer = 'X';
const PlayerTurn = function () {
    return `Player ${currentPlayer} turn`;
}
let gameOver = false;

const gameContainer = document.querySelector('.game');
//console.log(gameContainer);
const gridButtons = document.querySelectorAll('.box');
//console.log(gridButtons);

const displayMessage = document.querySelector('.game-play');
//Player 1 will choose the first box to place their X. Also cannot choose the same box twice.
let resetButton = document.querySelector('.reset');
let gameStatus = displayMessage.innerHTML = 'Ready to Play!';
//console.log(gameStatus);
let playerWins = function () {
    //console.log(playerWins);
    gameOver = true
    if (currentPlayer === 'X') {
        return "Player O Wins!"
    } else {
        return "Player X Wins"
    }

}

gameContainer.addEventListener('click', (event) => {
    if (gameOver !== true) {
        //console.log('Button Group Container Clicked');
        //console.log(event.target.getAttribute('id'));
        if (event.target.innerText === '') {//checks for empty box

            //console.log('blah');
            event.target.innerText = currentPlayer;
            if (currentPlayer === 'X') {
                //console.log('currentPlayerX');
                //checks for full box 
                currentPlayer = 'O'
                //console.log(event.target);
                //console.log('currentPlayerO');
                displayMessage.innerHTML = PlayerTurn();
                //this will check to see if the player's text is X if it is it will change it to O
            } else {
                currentPlayer = 'X'
                //console.log('currentPlayerX');
                displayMessage.innerHTML = PlayerTurn();
                //this will prepare for the next player turn
            }
            //console.log('current player');

            gamePlay();
            //i need to turn off clicks if a winner occurs

        }
    }

})

function gamePlay() {
    if (document.getElementById('b0').innerText === 'X' && document.getElementById('b1').innerText === 'X' && document.getElementById('b2').innerText === 'X') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win'); 

    }
    else if (document.getElementById('b3').innerText === 'X' && document.getElementById('b4').innerText === 'X' && document.getElementById('b5').innerText === 'X') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');          
    }
    else if (document.getElementById('b6').innerText === 'X' && document.getElementById('b7').innerText === 'X' && document.getElementById('b8').innerText === 'X') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');        
    }
    else if (document.getElementById('b0').innerText === 'O' && document.getElementById('b1').innerText === 'O' && document.getElementById('b2').innerText === 'O') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');        
    }
    else if (document.getElementById('b3').innerText === 'O' && document.getElementById('b4').innerText === 'O' && document.getElementById('b5').innerText === 'O') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');        
    }
    else if (document.getElementById('b6').innerText === 'O' && document.getElementById('b7').innerText === 'O' && document.getElementById('b8').innerText === 'O') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');         
    }
    else if (document.getElementById('b0').innerText === 'X' && document.getElementById('b4').innerText === 'X' && document.getElementById('b8').innerText === 'X') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');     
    }
    else if (document.getElementById('b2').innerText === 'X' && document.getElementById('b4').innerText === 'X' && document.getElementById('b6').innerText === 'X') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');        
    }
    else if (document.getElementById('b0').innerText === 'X' && document.getElementById('b3').innerText === 'X' && document.getElementById('b6').innerText === 'X') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');         
    }
    else if (document.getElementById('b0').innerText === 'O' && document.getElementById('b4').innerText === 'O' && document.getElementById('b8').innerText === 'O') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');       
    }
    else if (document.getElementById('b2').innerText === 'O' && document.getElementById('b4').innerText === 'O' && document.getElementById('b6').innerText === 'O') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');        
    }
    else if (document.getElementById('b0').innerText === 'O' && document.getElementById('b3').innerText === 'O' && document.getElementById('b6').innerText === 'O') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');     
    }
    else if (document.getElementById('b1').innerText === 'X' && document.getElementById('b4').innerText === 'X' && document.getElementById('b7').innerText === 'X') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');       
    }
    else if (document.getElementById('b2').innerText === 'X' && document.getElementById('b5').innerText === 'X' && document.getElementById('b8').innerText === 'X') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');         
    }
    else if (document.getElementById('b1').innerText === 'O' && document.getElementById('b4').innerText === 'O' && document.getElementById('b7').innerText === 'O') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');        
    }
    else if (document.getElementById('b2').innerText === 'O' && document.getElementById('b5').innerText === 'O' && document.getElementById('b8').innerText === 'O') {
        displayMessage.innerHTML = playerWins();
        //console.log(gameStatus = 'Win');       
    }
    else if (document.getElementById('b0').innerText !== '' && document.getElementById('b1').innerText !== '' && document.getElementById('b2').innerText !== '' && document.getElementById('b3').innerText !== '' && document.getElementById('b4').innerText !== '' && document.getElementById('b5').innerText !== '' && document.getElementById('b6').innerText !== '' && document.getElementById('b7').innerText !== '' && document.getElementById('b8').innerText !== '') {
        displayMessage.innerHTML = `Nobody Wins Play AGAIN!`;
        //console.log(gameStatus = 'Draw'); 

    }


}

//Is a draw when there is no more chances to win or the board is full? Is that the same thing?
//when the board is full AND no body won
//done gameOver function


//Tell the player if they won/lost or tell the players they came to a draw. Ask if the players would like to play again.
//done gamePlay Function

//Game should reset after a Win/Lose/Draw result if the players choose Play Again.
function restartGame() {
    //gameActive = true;
    currentPlayer = "X";
    //gameState = ["", "", "", "", "", "", "", "", ""];
    //displayMessage.innerHTML = `Try Again`;
    document.querySelectorAll('.box')
        .forEach(element => element.innerHTML = "");
}
resetButton.addEventListener('click', (event) => {
    event.preventDefault();
    displayMessage.innerHTML = `Let's play again?`
    // console.log(event.button);
    console.log('Clear');
    restartGame()
})
