# TOTAL HELL AGONY ALL THIS HERE
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
   
    <div class="board">
        <div class="cell" data-index="0"></div>
        <div class="cell" data-index="1"></div>
        <div class="cell" data-index="2"></div>
        <div class="cell" data-index="3"></div>
        <div class="cell" data-index="4"></div>
        <div class="cell" data-index="5"></div>
        <div class="cell" data-index="6"></div>
        <div class="cell" data-index="7"></div>
        <div class="cell" data-index="8"></div>
 
    </div>
 
    <script src="./script.js"></script>
</body>
</html>


let currentPlayer = "X";
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
 
const cells = document.querySelectorAll(".cell")
cells.forEach(cell => {
    cell.addEventListener('click', handleClick)
})
 
 
function handleClick(event) {
    //логика нажатия
    const index = event.target.getAttribute('data-index')
   
    //если ячейка пустая и игра не завершена
    if (boards[index] === '' && !gameOver) {
        //заполняем ячейку текущим игроком
        boards[index] = currentPlayer;
        event.target.textContent = currentPlayer;
    }
        if (checkWin()) {
            alert('Победил ');
            gameOver = true;
        }
        else if (nichya()) {
            alert('Ничья');
            gameOver = true;
        }
        else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
}
 
function checkWin() {
 
}
 
function nichya() {
   
}
