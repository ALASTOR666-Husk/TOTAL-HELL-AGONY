let currentPlayer = "X";
let gameOver = false; 
let boards = ['', '', '', '', '', '', '', '', '']; 
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]             
];
const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});
function handleClick(event) {
    const index = event.target.getAttribute('data-index');
    
    if (boards[index] === '' && !gameOver) {
        boards[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        
        if (checkWin()) {
            alert('Победил ' + currentPlayer + '! '); 
            gameOver = true;
        }
        else if (nichya()) {
            alert('Ничья! ');
            gameOver = true;
        }
        else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}
function checkWin() {
    for (let pattern of winPatterns) {
        if (boards[pattern[0]] === currentPlayer && 
            boards[pattern[1]] === currentPlayer && 
            boards[pattern[2]] === currentPlayer) {
            return true;
        }
    }
    return false;
}
function nichya() {
    return boards.every(cell => cell !== '');
}
function resetGame() {
    boards = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = '';              
        cell.classList.remove('winner');    
    });
    currentPlayer = 'X';
    gameOver = false;
}
const resetBtn = document.querySelector('#resetBtn'); 
if (resetBtn) {
    resetBtn.addEventListener('click', resetGame);
}
