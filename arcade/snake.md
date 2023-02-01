{% include arcadeSubmenu.html %}

<!DOCTYPE html>

<html>
  <head>
    <style>
      #game-board {
        border: 1px solid black;
        width: 500px;
        height: 500px;
        margin: 0 auto;
        position: relative;
      }
    </style>
  </head>
  <body onload="init()">
    <div id="game-board"></div>
  </body>
</html>

<style>
  #snake {
    background-color: green;
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 5px;
  }
</style>

<script>
    const board = document.getElementById("game-board");
  const snake = [];
  let direction = "right";
  let food = null;

  const createFood = () => {
    food = document.createElement("div");
    food.classList.add("food");
    food.style.left = Math.floor(Math.random() * 49) * 10 + "px";
    food.style.top = Math.floor(Math.random() * 49) * 10 + "px";
    board.appendChild(food);
  };

  const move = () => {
    for (let i = snake.length - 1; i > 0; i--) {
      snake[i].style.left = snake[i - 1].style.left;
      snake[i].style.top = snake[i - 1].style.top;
    }

    switch (direction) {
      case "right":
        snake[0].style.left =
          parseInt(snake[0].style.left) + 10 + "px";
        break;
      case "left":
        snake[0].style.left =
          parseInt(snake[0].style.left) - 10 + "px";
        break;
      case "up":
        snake[0].style.top =
          parseInt(snake[0].style.top) - 10 + "px";
        break;
      case "down":
        snake[0].style.top =
          parseInt(snake[0].style.top) + 10 + "px";
        break;
    }

    if (
      snake[0].style.left === food.style.left &&
      snake[0].style.top === food.style.top
    ) {
      snake.push(food);
      board.removeChild(food);
      createFood();
    }

    if (
      parseInt(snake[0].style.left) < 0 ||
      parseInt(snake[0].style.left) > 490 ||
      parseInt(snake[0].style.top) < 0 ||
      parseInt(snake[0].style.top) > 490
    ) {
      alert("game over");
      clearInterval(gameLoop);
    }

    for (let i = 1; i < snake.length; i++) {
      if (
        snake[0].style.left === snake[i].style.left &&
        snake[0].style.top === snake[i].style.top
      ) {
        alert("game over");
        clearInterval(gameLoop);
      }
    }
  };

  for (let i = 0; i < 5; i++) {
    snake[i] = document.createElement("div");
    snake[i].classList.add("snake");
    snake[i].style.left = (i * 10) + "px";
    board.appendChild(snake[i]);
  }

  createFood();

  document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
      case 37:
        if (direction !== "right") direction = "left";
        break;
      case 38:
        if (direction !== "down") direction = "up";
        break;
      case 39:
        if (direction !== "left") direction = "right";
        break;
      case 40:
        if (direction !== "up") direction = "down";
        break;
    }
  });

  const gameLoop = setInterval(move, 100);
  </script>