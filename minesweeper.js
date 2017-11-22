document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board =
{
  cells:
  [
    {
      hidden: true,
      row: 0,
      col: 0,
      isMine: false,
      isMarked: false,
    },
    {
      hidden: true,
      row: 0,
      col: 1,
      isMine: false,
      isMarked: false,
    },
    {
      hidden: true,
      row: 0,
      col: 2,
      isMine: false,
      isMarked: false,
    },
    {
      hidden: true,
      row: 1,
      col: 0,
      isMine: true,
      isMarked: false,
    }
  ]
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (let i=0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
   var surrounding = lib.getSurroundingCells(board.cells.row, board.cells.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  for (let i=0; i < getSurroundingCells.length; i++) {
    var count = 0;
    if (board.cells[i].isMine === true) {
      return count++;
    }

  var surroundingCells = getSurroundingCells(board.cells.row, board.cells.col);


  return count //# surroundingCells where cell.isMine === true
  }
}
