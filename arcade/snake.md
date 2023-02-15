{% include arcadeSubmenu.html %}


<html>

<head>
    <meta charset="UTF-8">
    <title>Snake</title>
</head>

<body>
<div class="outer">
    <h1>Snake</h1>
    <div id="startScreen">
        <p>You know how to play snake ;) <br> It costs <span style="color: #f1cc0c;">10 tokens</span> to play and your score is the number of tokens you earn. <br> (You need a score of 10 to break even) </p>
        <button type="button" class="startGame" id="start" value="" onclick="startGame()">Start Game for 10 <img class="tokenicon" src="{{ site.baseurl }}/images/AJToken_60x60.png"></button>
    </div>
    
    <canvas id="board"></canvas>
</div>
</body>

</html>

<style>
    body {
        font-family: "Courier New", Courier, monospace;
    }
    .outer {
        position: absolute;
        width: 94%;
        text-align: center;
    }
    #startScreen {
        font-size: 16pt;
        position: absolute;
        width: 80%;
        height: 400px;
        background-color: #302f2f;;
        border-radius: 20px;
        padding: 10%;
        z-index: 99;
    }
    #game-over {
        font-size: 16pt;
        position: absolute;
        width: 80%;
        height: 400px;
        background-color: #302f2f;;
        border-radius: 20px;
        padding: 10%;
        z-index: 99;
    }
    h1 {
        font-size: 32pt;
        text-align: center;
        margin-bottom: 30px;
    }
    .startGame {
        outline: none;
        -webkit-tap-highlight-color: transparent;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 30px;
        position: inline;
        width: 60%;
        margin-left: 20%;
        margin-right: 20%;
        height: 100px;
        margin-top: 100px;
        margin-bottom: 200px;
        border-radius: 8px;
        background-color: #302f2f;
        color: #f1cc0c;
        border: none;
        transition-duration: 0.3s;
    }
    .startGame:hover {
        color: #242424;
        background-color: #f1cc0c;
    }
    .tokenicon {
        width: 28px;
        margin-top: -5px;
        vertical-align: middle;
    }
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    .animater {
        animation: fadeOut 0.4s forwards;
    }
</style>

<script>
//remove start screen
function startGame() {
    let div = document.getElementById('startScreen');
    div.classList.add('animater');
    setTimeout(function() {
        div.style.display = "none";
        div.classList.remove("animater");
    }, 500);
}

function gameOver() {
    let div = document.getElementById('game-over');
    div.style.display = "block";
}

//score
let score = 0;



//board
var blockSize=25;
var rows=20;
var cols=20;
var board;
var context;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];



//food
var foodX;
var foodY;

var gameOver = false;



window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing on board

    placeFood();
    document.addEventListener("keyup", changeDirection); 
    //update();
    setInterval(update, 1000/10);

}

//draw score
function.drawScore() {
    ctx.fillStyle = "white";
    ctx.font = "10px Verdana";
    ctx.fillText("Score " + score, canvas.Width - 50, 10)
}



function update() {
    if (gameOver) {
        return;
    }
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY])
        placeFood();
    }


    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if(snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
        score++; 
    }

    //game over conditions
    if (snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > rows * blockSize) {
        gameOver = true;
        alert("Game Over")
    }
    
    for (let i = 0;  i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over")
        }
    }

}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1; 
    }
     else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1; 
    }
     else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0; 
    }
     else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0; 
    }
}



function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;


 
}