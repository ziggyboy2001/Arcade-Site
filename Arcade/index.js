const board = document.querySelector("#board");

let player = "X";
let pcMove = "O";

function nextPlayer() {
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
}
function nextPlayerVsPc() {
  if (player === "X") {
    pcMove = "O";
  } else {
    player = "X";
  }
}

let cells = Array.from(board.getElementsByTagName("td"));

const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkForWinner() {
  for (const combination of combinations) {
    if (
      cells[combination[0]].textContent === player &&
      cells[combination[1]].textContent === player &&
      cells[combination[2]].textContent === player
    ) {
      alert(`${player} is the winner`);
      return;
    }
    if (
      cells[combination[0]].textContent === pcMove &&
      cells[combination[1]].textContent === pcMove &&
      cells[combination[2]].textContent === pcMove
    ) {
      alert(`${pcMove} is the winner`);
      return;
    }
  }
}
board.addEventListener("click", function (event) {
  if (event.target.tagName === "TD" && !event.target.textContent) {
    event.target.textContent = player;
    checkForWinner();

    if (clicked === true) {
      makePcMove();
    } else {
      nextPlayer();
    }
  }
});

function makePcMove() {
  let emptyCells = [];
  for (const cell of cells) {
    if (!cell.textContent) {
      emptyCells.push(cell);
    }
  }
  let RandomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  RandomCell.textContent = pcMove;

  checkForWinner();
  nextPlayer();
  nextPlayerVsPc();
}

const newGame = document.getElementById("newGameBtn");
let clickedNewGame = false;
newGame.addEventListener("click", function () {
  clickedNewGame = true;
  const cells = Array.from(board.getElementsByTagName("td"));
  for (const cell of cells) {
    cell.textContent = [];
    player = "X";
  }
  rules.textContent =
    "ENTER YOUR NAME ON THE LEFT. PLAYER ONE MOVES FIRST AND WILL BE 'X', PLAYER TWO WILL BE 'O'";

  playerOneName.textContent = `Player One: `;

  playerTwoName.textContent = `Player Two: `;
  if (clickedNewGame === true) {
    vsComputer.textContent = `YOU VS PC`;
    newGame.textContent = `NEW GAME`;
  }
});

const vsComputer = document.getElementById("computerBtn");
const rules = document.getElementById("rules");
let clicked = false;
vsComputer.addEventListener("click", function () {
  clicked = true;
  const cells = Array.from(board.getElementsByTagName("td"));
  for (const cell of cells) {
    cell.textContent = [];
    player = "X";
  }
  rules.textContent =
    "VERSUS PC MODE: ENTER YOUR NAME ON THE LEFT, YOU GO FIRST AS 'X' ";

  playerTwoName.textContent = `Player Two:  Computer`;

  if (clicked === true) {
    vsComputer.textContent = `RESET PC MODE`;
    newGame.textContent = `PLAYER VS PLAYER`;
  }
});

const playerOneName = document.querySelector("#playerOneName");

playerOneName.addEventListener("click", newNameOne);
function newNameOne() {
  const name = prompt("enter name");
  playerOneName.textContent = `Player One: ${name}`;
}

const playerTwoName = document.querySelector("#playerTwoName");
playerTwoName.addEventListener("click", newNameTwo);
function newNameTwo() {
  const name = prompt("enter name");
  playerTwoName.textContent = `Player Two: ${name}`;
}
