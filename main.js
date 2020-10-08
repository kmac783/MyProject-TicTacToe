console.log('im working');

//There will be two players to start the game.
let currentPlayer = 'X';
    
const gameContainer = document.querySelector('.game');
//console.log(gameContainer);
const gridButtons = document.querySelectorAll('.box');
//console.log(gridButtons);
const resetGameButton = document.querySelector('button');
//console.log(resetGameButton);


gameContainer.addEventListener('click',(event)=>{
    //console.log('Button Group Container Clicked')
    //console.log(event.target.getAttribute('id'));
        if (event.target.innerText === '') //checks for empty box {
            event.target.innerText = currentPlayer;
            if (currentPlayer === 'X'){
                currentPlayer = 'O'
                //this will check to see if the player's text is X if it is it will change it to O
            } else {
            currentPlayer = 'X'
            //this will prepare for the next player turn
            }
        })
        //console.log('current player');



//How will they start a new game?
// use clear or reset?



//Player 1 will choose the first box to place their X. Also cannot choose the same box twice.



//The selections will continue until a draw or a win.
//You will need to run through the array of winning Combos to determine if it is a win or not.

//Is a draw when there is no more chances to win or the board is full? Is that the same thing?
//what is a win? Below are identified as the only possible winning combos in TicTacToe

//Tell the player if they won/lost or tell the players they came to a draw. Ask if the players would like to play again.

//Game should reset after a Win/Lose/Draw result if the players choose Play Again.



//Players should NOT be able to continue playing once there is a win/lose/draw.

//Page should not refresh in order to play again.