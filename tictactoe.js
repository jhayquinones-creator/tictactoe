const gameBoard = document.getElementById('gameBoard');
const message = document.getElementById('message');
const cells = document.querySelectorAll('.cell');
const scoreX = document.getElementById('scoreX');
const scoreO = document.getElementById('scoreO');
let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameActive = true;
let scores = { X: 0, O: 0 };
let moveHistory = [];

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (board[index] || !gameActive) return;

    moveHistory.push({ index, player: currentPlayer });
    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.classList.add(currentPlayer);
    playSound('click');

    if (checkWin(currentPlayer)) {
        highlightWinningLine(currentPlayer);
        scores[currentPlayer]++;
        updateScore();
        message.textContent = `Player ${currentPlayer} wins!`;
        playSound('win');
        gameActive = false;
        return;
    }

    if (board.every(cell => cell)) {
        message.textContent = "It's a draw!";
        playSound('draw');
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === player;
        });
    });
}

function highlightWinningLine(player) {
    winningCombinations.forEach(combination => {
        if (combination.every(index => board[index] === player)) {
            combination.forEach(index => {
                cells[index].classList.add('winning-line');
            });
        }
    });
}

function restartGame() {
    board.fill(null);
    moveHistory = [];
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O', 'winning-line');
    });
    currentPlayer = 'X';
    gameActive = true;
    message.textContent = '';
}

function updateScore() {
    scoreX.textContent = scores.X;
    scoreO.textContent = scores.O;
}

function undoMove() {
    if (moveHistory.length === 0) return;

    const lastMove = moveHistory.pop();
    board[lastMove.index] = null;
    cells[lastMove.index].textContent = '';
    cells[lastMove.index].classList.remove(lastMove.player, 'winning-line');

    currentPlayer = lastMove.player === 'X' ? 'O' : 'X';
    message.textContent = '';
    gameActive = true;
}

function resetScore() {
    scores = { X: 0, O: 0 };
    updateScore();
    message.textContent = 'Scores have been reset!';
}

function playSound(sound) {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
}