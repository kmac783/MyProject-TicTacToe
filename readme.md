# Project 1 - Tic Tac Toe

## About the Project: 

Looking for a quick, simple game a 5 year old can play? Look no further than this minimally rendered game of Tic Tac Toe!

Built in HTML, CSS and driven by Javascript you can easily participate in **one or one hundred rounds of fun**. 

Accessible via mobile or desktop, this game will keep those kids busy for hours in the car. 

This simple game version includes the ability to: 
-- Start a game with two players
-- Track who's turn it is next
-- Track if the players win or draw
-- Reset the game board to play again

———

## Wireframing 

I quickly sketched out what I thought the game could look like on a note card. At the beginning the user would choose their “game piece” to start the game. And the player’s wins/losses would be kept on a scoreboard. I realized later how ambitious that would be. 

[My Wireframe] (https://prudentialacademy.slack.com/files/U01ACG87LQ3/F01CA7ABP9C/img_20201013_093410.jpg)

———

## Development

I kicked off the work by pretty quickly building out the HTML page with a header and body and within the body, an H1 and div for the board. I made a smaller board, that actually fits well in a mobile format as well, so not much was needed for additional styling. 

Understanding players will have to click on the boxes to insert their piece (an X or an O), I referenced back to the event propagation practice we had completed. I knew that we had developed each box to register a click and track the exact box that was clicked to the console log. Next was figuring out how to put the X or O into the box that was clicked. So I referenced our quote machine lab, where we inserted the quote we created into the list of quotes. Utilizing innerText, I was able to insert the game piece during the click event of a box on the board, alternating between X and O. On the board I also included the hover over effect so users would see which box they were going to select.

In order to clear the screen, I used an event Listener connected to a button to clear the box's innerText when clicked so the players can play again. 

Also I included a text H2 tag to show messages for play - who's turn, if the players win or draw and encouraging them to play again.

———

## Unsolved issues for Future Iterations

-- Would like to have the button text change - start with Play, change to Play Again when one person wins, b/c you don’t really need a Play button to start the play, you just click on the board. 

-- I had origially planned on including a scoreboard, but I think my player toggling will make that difficult. TBD.

———

## Solving for Winner

This was not as simple as I thought it was going to be, I knew of 9 possible winning combinations for the game. So to build out those combinations as represented in the boxes, I needed to call out each box's innerText as equalling the other for that combo, in "if...else" statements to reflect wins. But this left the issue of draws, when no one wins, and therefore needed to add an else statement identifying combos that were not equal and making that the draw solution.

———

## Favorite Functions

The displayMessage function was the one I had the most fun with. Trying to make all the items say something different depending on what the player is doing at the time.

———

[Hosted Link] (https://kmac783.github.io/MyProject-TicTacToe/)