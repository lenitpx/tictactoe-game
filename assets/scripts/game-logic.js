// first attempt at game board creation

let gameBoard = new Array(9).fill('') // technique from Stack Overflow

const currentPlayer = {
  token: 'x',
  checkToken: function () { // this is a this.example from Nate!
    return this.token
  }
}
// var currentPlayer
currentPlayer.checkToken()

const gameBoardSquares = function (event) {
  console.log('Im inside gameBoardSquares and gameBoard is', gameBoard)
  for (let i = gameBoard[0]; i <= gameBoard.length; i++) {
    console.log(gameBoard[i])
  }
}

const checkIfUndefined = function (index) {
  if (gameBoard[index] === '') {
    return 'this square is fine'
  } else {
    return 'choose another square'
  }
}

// function takes an array position and determines whether it has a value of undefined
// checkIfUndefined(2)

const makeMove = function (index, token) {
  gameBoard[index] = token
}
// makeMove puts a value in an array position

const switchPlayer = function (currentPlayer) { // pass in currentPlayer because the variable needs to be worked on
  if (currentPlayer.token === 'x') {
    currentPlayer.token = 'o'
  } else {
    currentPlayer.token = 'x'
  }
}
// function switchPlayer

const emptyBoard = function () {
  gameBoard = new Array(9).fill('')
}

// create emptyBoard function to make gameBoard into an empty array

// problems: 4: writing a function that assigns a value to an empty space in the array and returns a warning if already assigned
// problems: 4.1: function has to be a function
// problems: 4.2 function has to take an element of the gameBoard array as a parameter
// problems: 4.3: function has to determine if element !=== undefined
// problems: 4.4: function has to return an alert if element !=== undefined

// problems: 4.5: writing a function that selects a specific array slot and checks if it is available (i.e has non-null property)
// problems: 5: writing a function that varies the element assigned to the array slot depending on user (X and O)
// problems: 6: writing a function that tracks and determines a win condition (three in a row vertical, horizonal, diagonal)

// export game board
module.exports = {
  gameBoard,
  gameBoardSquares,
  emptyBoard,
  makeMove,
  checkIfUndefined,
  currentPlayer,
  switchPlayer
}

// SETTINGS: CHANGE PASSWORD & LOG OUT -- MORE USER STORIES
