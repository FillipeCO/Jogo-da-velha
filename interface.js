document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});


// let reset = document.querySelector(".resetar");
// reset.addEventListener("click", resetar);



function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    if (playerTime == 1) {
      setTimeout(() => {
        alert("O jogo acabou - Espada venceu!");
      }, 10);
      resetar();
    } else {
      setTimeout(() => {
        alert("O jogo acabou - Escudo venceu!");
      }, 10);
      resetar();
    }
  }

  updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

function resetar() {
    let board = ["", "", "", "", "", "", "", "", ""];
    let playerTime = 0;
    let gameOver = false;
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  });
}
