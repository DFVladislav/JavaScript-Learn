const boardElement = document.getElementById("board")

let board = ['', '', '', '', '', '', '', '', '']


let gameOver = false
let currentPlayer = "X"

const winPattern = [
    [0, 1, 2], // горизонталь
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // вертикаль
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // диагональ
    [2, 4, 6]
]


for (let i = 0; i < 9; i++) {

    const cell = document.createElement("div")


    cell.classList.add("cell")
    cell.setAttribute("data-index", i)
    cell.addEventListener('click', clicker)
    boardElement.append(cell)
}




function clicker(event) {
    const index = event.target.getAttribute("data-index")

    if (board[index] === "" && !gameOver) {
        board[index] = currentPlayer
        event.target.textContent = currentPlayer

        if (checkWin()) {
            alert(`Победитель: ${currentPlayer}`)
            gameOver = true
        } else if (board.every(cell => cell !== "")) {
            alert("Ничья!")
            gameOver = true
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X"
        }
    }
}

function checkWin() {


    return winPattern.some(pattern => {
        return pattern.every(index => board[index] === currentPlayer)
    })


}

function resetGame() {
    const resetBtn = document.querySelector(".resetBtn");
    resetBtn.addEventListener("click", () => {

        board = ['', '', '', '', '', '', '', '', '']

        gameOver = false
        currentPlayer = "X"
        document.querySelectorAll(".cell").forEach(cell => cell.textContent = "")
    })
}


resetGame();
















