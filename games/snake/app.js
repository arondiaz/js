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

  gameOverSign.style.display = "none";
  startButton.disabled = true;
  drawSnake();

  updateScore();
  createRandomFood();
  document.addEventListener("keydown", directionEvent);
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
  boardSquares.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      const squareValue = `${rowIndex}${columnIndex}`;
      const squareElement = document.createElement("DIV");
      squareElement.setAttribute("class", "square emptySquare");
      squareElement.setAttribute("id", squareValue);
      board.appendChild(squareElement);
      emptySquare.push(squareValue);
    });
  });
}

function drawSquare(square, type) {
  const [row, column] = square.split("");
  boardSquares[row][column] = squareTypes[type];
  const squareElement = document.getElementById(square);
  squareElement.setAttribute("class", `square ${type}`);

  if (type === "emptySquare") {
    emptySquare.push(square);
  } else {
    if (emptySquare.indexOf(square) !== -1) {
      emptySquare.splice(emptySquare.indexOf(square), 1);
    }
  }
}

function drawSnake() {
  snake.forEach((square) => drawSquare(square, "snakeSquare"));
}

function updateScore() {
  scoreBoard.innerText = score;
}

function createRandomFood() {
  const randomEmptySquare =
    emptySquare[Math.floor(Math.random() * emptySquare.length)];
  drawSquare(randomEmptySquare, "foodSquare");
}

function directionEvent(key) {
  switch (key.code) {
    case "ArrowUp":
      direction != "ArrowDown" && setDirection(key.code);
      break;
    case "ArrowDown":
      direction != "ArrowUp" && setDirection(key.code);
      break;
    case "ArrowLeft":
      direction != "ArrowRigth" && setDirection(key.code);
      break;
    case "ArrowRigth":
      direction != "ArrowLeft" && setDirection(key.code);
      break;
  }
}
