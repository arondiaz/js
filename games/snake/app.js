const board = document.querySelector("#board");
const scoreBoard = document.querySelector("#scoreBoard");
const startButton = document.querySelector("#start");
const gameOverSign = document.querySelector("#gameOver");

const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2,
};

const directions = {
  ArrowUp: -10,
  ArrowDown: 10,
  ArrowRight: 1,
  ArrowLeft: -1,
};

let snake;
let score;
let direction;
let boardSquares;
let emptySquare;
let moveInternal;

startButton.addEventListener("click", startGame);

function startGame() {
  setGame();
}

const setGame = () => {
  snake = ["00", "01", "02", "03"];
  score = snake.length;
  direction = "ArrowRight";
  boardSquares = Array.from(Array(boardSize), () =>
    new Array(boardSize).fill(squareTypes.emptySquare)
  );

  board.innerHTML = "";
  emptySquare = [];
  createBoard();
};

function createBoard() {
    
}