TIC-TAC-TOE WITH UNDO
=====================

ABOUT
-----
This is a two-player Tic-Tac-Toe game built with plain HTML, CSS, and
JavaScript. Players take turns placing X and O on a 3-by-3 board. The game
detects wins and draws, tracks each player's wins, and lets you undo the most
recent move.

PROJECT FILES
-------------
tictactoe.html
    Defines the page structure: the game board, score, status message, and
    Restart Game, Reset Score, and Undo Move buttons. It loads the stylesheet
    and JavaScript files.

tictactoe.css
    Styles the page and game interface, including the board layout, buttons,
    winning-cell animation, mobile-sized board, and background image.

tictactoe.js
    Implements the game behavior. It stores the board, whose turn it is,
    whether the game is active, the scores, and the move history.

pexels-pok-rie-33563-1432669.jpg
    Background image referenced by tictactoe.css. Keep it alongside the other
    project files so the image can load.

image.png
    Screenshot of the Tic-Tac-Toe game.

SCREENSHOT
----------
See image.png in this folder for a screenshot of the game.

HOW THE CODE WORKS
------------------
1. The HTML creates nine board cells. Each has a data-index from 0 to 8.
2. The JavaScript adds a click handler to each cell. A click is ignored if the
   cell is occupied or the game has ended.
3. A valid move is saved in the move history, displayed in the cell, and
   checked against the eight possible winning combinations.
4. When a player wins, the winning cells are highlighted and that player's
   score is increased. If all cells are occupied without a winner, the game
   reports a draw.
5. Restart Game clears the current board but keeps the scores. Undo Move
   removes the last move. Reset Score sets both players' scores to zero.

RUNNING THE GAME
----------------
Open tictactoe.html in a web browser. No build tools or package installation
are required. Keep the HTML, CSS, JavaScript, and background image together
in the same folder.

The JavaScript also tries to play sounds from sounds/click.mp3,
sounds/win.mp3, and sounds/draw.mp3. Those files are not included in this
project, so sound effects require adding those audio files at those paths.

GITHUB PAGES
------------
For a site URL that opens directly at the project root, GitHub Pages expects
an index.html file in the published folder. Rename tictactoe.html to
index.html before publishing, and keep the CSS, JavaScript, and image files
in the same folder.

DOCKER
------
Build the image from the project folder:

    docker build -t tictactoe .

Run the container and map port 8080 on your computer to port 80 in the
container:

    docker run --name tictactoe-game --rm -p 8080:80 tictactoe

Open http://localhost:8080 in a web browser. Press Ctrl+C in the terminal to
stop the container. The Dockerfile serves the game with Nginx and maps
tictactoe.html to the default index.html page, so you do not need to rename
the original file.
