console.log('im working');

//There will be two players to start the game.
let currentPlayer = 'X';
const PlayerTurn = function () {
    return `Player ${currentPlayer} turn`;
}
let gameWinner = '';
const playerWins = function () {
    displayMessage.innerHTML = `${gameWinner} wins`;

}
const gameContainer = document.querySelector('.game');
//console.log(gameContainer);
const gridButtons = document.querySelectorAll('.box');
//console.log(gridButtons);
let gameStatus = '';
const displayMessage = document.querySelector('.game-play');
//Player 1 will choose the first box to place their X. Also cannot choose the same box twice.
let resetButton = document.querySelector('.reset');


gameContainer.addEventListener('click', (event) => {
    //console.log('Button Group Container Clicked');
    //console.log(event.target.getAttribute('id'));
    if (event.target.innerText === '') {//checks for empty box
        console.log('blah');
        event.target.innerText = currentPlayer;
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
            console.log(event.target);
            displayMessage.innerHTML = PlayerTurn();
            //this will check to see if the player's text is X if it is it will change it to O
        } else {
            currentPlayer = 'X'
            //console.log(currentPlayer);
            displayMessage.innerHTML = PlayerTurn();
            //this will prepare for the next player turn
        }

        //checks for full box 
        //i need to turn off click
        gamePlay();
    }
})
//console.log('current player');
function gamePlay() {
    if (document.getElementById('b0').innerText === 'X' && document.getElementById('b1').innerText === 'X' && document.getElementById('b2').innerText === 'X') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win'); 

    }
    else if (document.getElementById('b3').innerText === 'X' && document.getElementById('b4').innerText === 'X' && document.getElementById('b5').innerText === 'X') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');          
    }
    else if (document.getElementById('b6').innerText === 'X' && document.getElementById('b7').innerText === 'X' && document.getElementById('b8').innerText === 'X') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');        
    }
    else if (document.getElementById('b0').innerText === 'O' && document.getElementById('b1').innerText === 'O' && document.getElementById('b2').innerText === 'O') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');        
    }
    else if (document.getElementById('b3').innerText === 'O' && document.getElementById('b4').innerText === 'O' && document.getElementById('b5').innerText === 'O') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');        
    }
    else if (document.getElementById('b6').innerText === 'O' && document.getElementById('b7').innerText === 'O' && document.getElementById('b8').innerText === 'O') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');         
    }
    else if (document.getElementById('b0').innerText === 'X' && document.getElementById('b4').innerText === 'X' && document.getElementById('b8').innerText === 'X') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');     
    }
    else if (document.getElementById('b2').innerText === 'X' && document.getElementById('b4').innerText === 'X' && document.getElementById('b6').innerText === 'X') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');        
    }
    else if (document.getElementById('b0').innerText === 'X' && document.getElementById('b3').innerText === 'X' && document.getElementById('b6').innerText === 'X') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');         
    }
    else if (document.getElementById('b0').innerText === 'O' && document.getElementById('b4').innerText === 'O' && document.getElementById('b8').innerText === 'O') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');       
    }
    else if (document.getElementById('b2').innerText === 'O' && document.getElementById('b4').innerText === 'O' && document.getElementById('b6').innerText === 'O') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');        
    }
    else if (document.getElementById('b0').innerText === 'O' && document.getElementById('b3').innerText === 'O' && document.getElementById('b6').innerText === 'O') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');     
    }
    else if (document.getElementById('b1').innerText === 'X' && document.getElementById('b4').innerText === 'X' && document.getElementById('b7').innerText === 'X') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');       
    }
    else if (document.getElementById('b2').innerText === 'X' && document.getElementById('b5').innerText === 'X' && document.getElementById('b8').innerText === 'X') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');         
    }
    else if (document.getElementById('b1').innerText === 'O' && document.getElementById('b4').innerText === 'O' && document.getElementById('b7').innerText === 'O') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');        
    }
    else if (document.getElementById('b2').innerText === 'O' && document.getElementById('b5').innerText === 'O' && document.getElementById('b8').innerText === 'O') {
        displayMessage.innerHTML = `You win!`;
        //console.log(gameStatus = 'Win');       
    }
    else if (document.getElementById('b0').innerText !== '' && document.getElementById('b1').innerText !== '' && document.getElementById('b2').innerText !== '' && document.getElementById('b3').innerText !== '' && document.getElementById('b4').innerText !== '' && document.getElementById('b5').innerText !== '' && document.getElementById('b6').innerText !== '' && document.getElementById('b7').innerText !== '' && document.getElementById('b8').innerText !== '') {
        displayMessage.innerHTML = `Nobody Wins Play AGAIN!`;
        //console.log(gameStatus = 'Draw'); 

    }


}
//console.log(gameStatus);


//Is a draw when there is no more chances to win or the board is full? Is that the same thing?
//when the board is full AND no body won


//Tell the player if they won/lost or tell the players they came to a draw. Ask if the players would like to play again.


//Game should reset after a Win/Lose/Draw result if the players choose Play Again.


function restartGame() {
    //gameActive = true;
    currentPlayer = "X";
    //gameState = ["", "", "", "", "", "", "", "", ""];
    displayMessage.innerHTML = `Try Again`;
    document.querySelectorAll('.box')
        .forEach(element => element.innerHTML = "");
}
resetButton.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event.button);
    restartGame()
})



//Players should NOT be able to continue playing once there is a win/lose/draw.


//Page should not refresh in order to play again.
