{% include arcadeSubmenu.html %}

# <html></html>
# <style></style>
# <script></script>

<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport", content="width=device-width, initial-scale=1.0">
    <title>Snake</title>
</head>

<body>
    <h1>Snake</h1>
    <canvas id="board"></canvas>
</body>

</html>

<style>
    body {
        font-family: "Courier New", Courier, monospace;
        text-align: center;
    }
</style>

<script>
//board
var blockSize=25;
var rows=20;
var cols=20;
var board;
var context;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
}