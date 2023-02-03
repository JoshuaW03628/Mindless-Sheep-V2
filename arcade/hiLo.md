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
      <h1 style="font-size: 32pt;">Hi-Lo</h1>
      <div class="theIcon">
        <i class="fas fa-question" id="theIcon"></i>
      </div>
      <div class="theGuessing" id="theGuessing">
        <h1 style="font-size: 16pt;">Choose a number between 1 and 100</h1><br>
        <input type="text" id="numInput" class="numInput" te /><br><br>
        <input type="button" value="Make Your Guess!" onclick="guessNum()" class="guessButton" id="guessButton">
      </div>
      <div id="congo" style="display: none;">
        <br>
        <h1 style="font-size: 71px; margin-top: -4%;" id="correctNum"></h1><br>
        <h1 style="font-size: 16pt; margin-bottom: 4%;">🎉Congratulations! You guessed correct number in <b id="counter" style="font-size: 16pt;"></b> guesses <br> You earned <b id="tokens" style="font-size: 18pt; color: #f1cc0c;"></b> tokens!</h1>
        <input type="button" value="Play Again!" onclick="location.reload()" class="guessButton">
      </div>
      <br>
      <p id="guessssses">Number of guesses: <b id="counter2"></b></p>
    </div>
  </div>

</body>

</html>

<style>

* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.mainContainer {
  position: absolute;
  width: 94%;
  text-align: center;
}

.theIcon {
  font-size: 70px;
  margin: 4%;
}


.numInput {
  outline: none;
  margin: none 2% 2% 2%;
  text-align: center;
  font-size: 31px;
  width: 61px;
  height: 61px;
  border-style: solid;
  border-width: 5px;
  border-color: #f1cc0c;
  color: white;
  background-color: transparent;
  transition-duration: 0.3s;
}

.numInput:focus {
  border-color: white;
}

.guessButton {
  margin: 2%;
  background-color: #f1cc0c;
  border: none;
  color: black;
  padding: 20px 32px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 3px;
  transition-duration: 0.3s;
}

.guessButton:hover {
  background-color: white;
}

</style>
<script>

var theNum = 0;
var counter = 0;
var db;
var name;

//generates random number
function randomNum() {
  theNum = Math.floor(Math.random() * 100 + 1);
}


// makes the 'enter' key work
var input = document.getElementById("numInput");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("guessButton").click();
  }
});

// The actual game
function guessNum() {
  counter++;
  tokens=25-counter;
  document.getElementById("counter2").innerHTML = counter;
  document.getElementById("counter").innerHTML = counter;
  document.getElementById("tokens").innerHTML = tokens;
  var numIn = 0;
  numIn = document.getElementById("numInput").value;
  if (numIn > theNum) {
    document.getElementById("theIcon").className = "fas fa-arrow-down";
  } else if (numIn < theNum) {
    document.getElementById("theIcon").className = "fas fa-arrow-up";
  } else if (numIn == theNum) {
    document.getElementById("theIcon").className = "fas fa-check-circle";
    document.getElementById("theGuessing").style.display = "none";
    document.getElementById("correctNum").innerHTML = theNum;
    document.getElementById("guessssses").style.display = "none";
    document.getElementById("congo").style.display = "block";
  }
  document.getElementById("numInput").value = "";
}
</script>