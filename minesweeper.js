document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{
    row: 0,
    col: 0,
    isMine: false,
    hidden: true,
  },
  {
    row: 0,
    col: 1,
    isMine: false,
    hidden: true,
  },
  {
    row: 0,
    col: 2,
    isMine: false,
    hidden: true,
  },
  {
    row: 1,
    col: 0,
    isMine: true,
    hidden: true,
  },
  {
    row: 1,
    col: 1,
    isMine: true,
    hidden: true,
  },
  {
    row: 1,
    col: 2,
    isMine: true,
    hidden: true,
  },
  {
    row: 2,
    col: 0,
    isMine: true,
    hidden: true,
  },
  {
    row: 2,
    col: 1,
    isMine: true,
    hidden: true,
  },
  {
    row: 2,
    col: 2,
    isMine: false,
    hidden: true,
  },
]
}


function startGame () {
  for (var i = 0; i < board.cells.length; i++) {
    var cell = board.cells[i]
    cell.surroundingMines = countSurroundingMines(cell)
  }
  lib.initBoard()
  document.addEventListener("mousedown", checkForWin);
}


function checkForWin () {
  var isTheWinner = true
  for (var i = 0; i < board.cells.length; i++) {
    var cell = board.cells[i]
    if (cell.isMine && cell.isMarked == false) {
      isTheWinner = false
    }
    if (cell.isMine == false && cell.hidden) {
      isTheWinner = false
    }
  }
    if (isTheWinner) {
      lib.displayMessage('You win!')
    }
}


function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0
  for (i = 0; i < surrounding.length; i++) {
    var cell = surrounding[i]
    if (cell.isMine) {
      count++
    }
  }
  return count
}

