{% include arcadeSubmenu.html %}


<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://kit.fontawesome.com/336de93654.js" defer></script>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
  <title>Hi-Lo Game</title>
</head>

<body onload="randomNum()">
  <div class="mainContainer" id="mainContainer">
    <div class="vCenter">
      <h1 style="font-size: 71px;">Hi-Lo</h1>
      <div class="theIcon">
        <i class="fas fa-question" id="theIcon"></i>
      </div>
      <div class="theGuessing" id="theGuessing">
        <h1>Choose a number between 1 and 100</h1><br>
        <input type="text" id="numInput" class="numInput" te /><br><br>
        <input type="button" value="Make Your Guess!" onclick="guessNum()" class="guessButton" id="guessButton">
      </div>
      <div id="congo" style="display: none;">
        <br>
        <h1 style="font-size: 71px;" id="correctNum"></h1><br>
        <h1>🎉Congratulations! You guessed correct number✌️</h1>
        <input type="button" value="Play Again!" onclick="location.reload()" class="guessButton">
      </div>
      <br>
      <p>Number of guesses: <b id="counter"></b></p>
    </div>
  </div>

</body>

</html>

<style> {
  margin: 0;
  padding: 0;
}


body {
  text-align: bottom;
  font-family: "Open Sans", sans-serif;
  background-color: orangered;
  color: white;
}

.mainContent {
  position: relative;
}

.vCenter {
  width: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-18%, 0%);
}

.theIcon {
  font-size: 121px;
}


.numInput {
  text-align: center;
  font-size: 31px;
  width: 61px;
  height: 61px;
  border-style: solid;
  border-width: 5px;
  border-color: white;
  color: white;
  background-color: transparent;
}

.guessButton {
  background-color: white;
  border: none;
  color: black;
  padding: 20px 32px;
  text-align: bottom;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 3px;
}
</style>
<script>

var theNum = 0;
var counter = 0;
var db;
var name;

function randomNum() {
  theNum = Math.floor(Math.random() * 100 + 1);
}

var input = document.getElementById("numInput");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("guessButton").click();
  }
});


function guessNum() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
  var numIn = 0;
  numIn = document.getElementById("numInput").value;
  if (numIn > theNum) {
    document.getElementById("theIcon").className = "fas fa-arrow-down";
    document.body.style.backgroundColor = "red";
  } else if (numIn < theNum) {
    document.getElementById("theIcon").className = "fas fa-arrow-up";
    document.body.style.backgroundColor = "red";
  } else if (numIn == theNum) {
    document.getElementById("theIcon").className = "fas fa-check-circle";
    document.getElementById("theGuessing").style.display = "none";
    document.getElementById("correctNum").innerHTML = theNum;
    document.getElementById("congo").style.display = "block";
    document.body.style.backgroundColor = "limegreen";
  }
  document.getElementById("numInput").value = "";
}
</script>
.