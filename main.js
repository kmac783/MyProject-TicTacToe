console.log('im working');

//There will be two players to start the game.
let currentPlayer = 'X';
    
const gameContainer = document.querySelector('.game');
//console.log(gameContainer);
const gridButtons = document.querySelectorAll('.box');
//console.log(gridButtons);
const gameItems = document.getElementById('b0').innerText;
//console.log(gameItems);

//Player 1 will choose the first box to place their X. Also cannot choose the same box twice.


gameContainer.addEventListener('click',(event)=>{
    //console.log('Button Group Container Clicked')
    console.log(event.target.getAttribute('id'));
        if (event.target.innerText === '') //checks for empty box {
            event.target.innerText = currentPlayer;
            if (currentPlayer === 'X'){
                currentPlayer = 'O'
                //this will check to see if the player's text is X if it is it will change it to O
            } else {
            currentPlayer = 'X'
            //this will prepare for the next player turn
            }
        gamePlay();
        })
        //console.log('current player');
        


//The selections will continue until a draw or a win.
//You will need to run through the array of winning Combos to determine if it is a win or not.
let gameStatus = '';
function gamePlay() {
    if (document.getElementById('b0').innerText === 'X' && document.getElementById('b1').innerText === 'X' && document.getElementById('b2').innerText === 'X') 
        {
        alert("Game Won. Play Again")
        console.log(gameStatus = 'Win');         
        } 
    if (document.getElementById('b3').innerText === 'X' && document.getElementById('b4').innerText === 'X' && document.getElementById('b5').innerText === 'X') 
    {
    alert("Game Won. Play Again")
    console.log(gameStatus = 'Win');         
    } 
    if (document.getElementById('b6').innerText === 'X' && document.getElementById('b7').innerText === 'X' && document.getElementById('b8').innerText === 'X') 
    {
    alert("Game Won. Play Again")
    console.log(gameStatus = 'Win');         
    } 
    if (document.getElementById('b0').innerText === 'O' && document.getElementById('b1').innerText === 'O' && document.getElementById('b2').innerText === 'O') 
        {
        alert("Game Won. Play Again")
        console.log(gameStatus = 'Win');         
        } 
    if (document.getElementById('b3').innerText === 'O' && document.getElementById('b4').innerText === 'O' && document.getElementById('b5').innerText === 'O') 
    {
    alert("Game Won. Play Again")
    console.log(gameStatus = 'Win');         
    } 
    if (document.getElementById('b6').innerText === 'O' && document.getElementById('b7').innerText === 'O' && document.getElementById('b8').innerText === 'O') 
    {
    alert("Game Won. Play Again")
    console.log(gameStatus = 'Win');         
    }
    if (document.getElementById('b0').innerText === 'X' && document.getElementById('b4').innerText === 'X' && document.getElementById('b8').innerText === 'X') 
        {
        alert("Game Won. Play Again")
        console.log(gameStatus = 'Win');         
        } 
    if (document.getElementById('b2').innerText === 'X' && document.getElementById('b4').innerText === 'X' && document.getElementById('b6').innerText === 'X') 
    {
    alert("Game Won. Play Again")
    console.log(gameStatus = 'Win');         
    } 
    if (document.getElementById('b0').innerText === 'X' && document.getElementById('b3').innerText === 'X' && document.getElementById('b6').innerText === 'X') 
    {
    alert("Game Won. Play Again")
    console.log(gameStatus = 'Win');         
    } 
    if (document.getElementById('b0').innerText === 'O' && document.getElementById('b4').innerText === 'O' && document.getElementById('b8').innerText === 'O') 
        {
        alert("Game Won. Play Again")
        console.log(gameStatus = 'Win');         
        } 
    if (document.getElementById('b2').innerText === 'O' && document.getElementById('b4').innerText === 'O' && document.getElementById('b6').innerText === 'O') 
    {
    alert("Game Won. Play Again")
    console.log(gameStatus = 'Win');         
    } 
    if (document.getElementById('b0').innerText === 'O' && document.getElementById('b3').innerText === 'O' && document.getElementById('b6').innerText === 'O') 
    {
    alert("Game Won. Play Again")
    console.log(gameStatus = 'Win');         
    }
    if (document.getElementById('b1').innerText === 'X' && document.getElementById('b4').innerText === 'X' && document.getElementById('b7').innerText === 'X') 
        {
        alert("Game Won. Play Again")
        console.log(gameStatus = 'Win');         
        } 
    if (document.getElementById('b2').innerText === 'X' && document.getElementById('b5').innerText === 'X' && document.getElementById('b8').innerText === 'X') 
    {
    alert("Game Won. Play Again")
    console.log(gameStatus = 'Win');         
    }  
    if (document.getElementById('b1').innerText === 'O' && document.getElementById('b4').innerText === 'O' && document.getElementById('b7').innerText === 'O') 
        {
        alert("Game Won. Play Again")
        console.log(gameStatus = 'Win');         
        } 
    if (document.getElementById('b2').innerText === 'O' && document.getElementById('b5').innerText === 'O' && document.getElementById('b8').innerText === 'O') 
    {
    alert("Game Won. Play Again")
    console.log(gameStatus = 'Win');         
    } 
    // else {
    //     alert("It's a Draw Nobody Won. Play Again")
    //     console.log(gameStatus = 'Draw');
    // }
   
}
console.log(gameStatus);
       
//console.log(winningCombos);
//let gameStatus = 

//how do I get gameStatus to track the click results in the boxes? 


//Is a draw when there is no more chances to win or the board is full? Is that the same thing?
//what is a win? Below are identified as the only possible winning combos in TicTacToe

//Tell the player if they won/lost or tell the players they came to a draw. Ask if the players would like to play again.
//gameStatus

//Game should reset after a Win/Lose/Draw result if the players choose Play Again.

// const gameReset = document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
// ;
//console.log(gameReset);


//Players should NOT be able to continue playing once there is a win/lose/draw.


//Page should not refresh in order to play again.
