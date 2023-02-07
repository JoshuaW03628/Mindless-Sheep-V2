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
<div id="overlay">
  <h2>Hi-Lo Rules;</h2>
  <p> </p>
  <p> </p>
  <li>Guess a number from 1-100, the an arrow will tell you wether the random number is higher or lower, you continue to guess based off of these clues until you guess the number.</li>
  <li> Tokens: It costs 15 Tokens to Play, you start off with 25 tokens in game, each guess you make you get 1 token subtracted, So if you made 5 guesses you would gain 20 tokens, subtracting The 10 original tokens it cost.   </li>
   

<div class="container">
  <div class="center">
    <body>
    <button class= "button1" onclick="startgame()">
      15 Tokens to Play
      <span class="first"></span>
      <span class="second"></span>
      <span class="third"></span>
      <span class="fourth"></span>
    </button>
    </body>
  </div>
</div>
</div>
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

<script> 

onEvent("button1", "click", function( ) {
  setDiv("mainContainer");
});

function startgame() {
  let div = document.getElementById("overlay");
  div.style.display = "none";
}
</script>

<style>


.container {
  height: 200px;
  position: relative;
  border: 3px yellow;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}


      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        background: #000;
      }
      button {
        border: none;
        padding: 20px 40px;
        font-size: 25px;
        position: relative;
        background: transparent;
        color: #f1cc0c;
        text-transform: uppercase;
        border: 3px solid #f1cc0c;
        cursor: pointer;
        transition: all 0.7s;
        overflow: hidden;
        border-radius: 80px;
      }

      button:hover {
        color: #f1cc0c;
      }
      span {
        transition: all 0.9s;
        z-index: -1;
      }

      button .first {
        content: "";
        position: absolute;
        right: 100%;
        top: 0;
        width: 25%;
        height: 100%;
        background: #f1cc0c;
      }

      button:hover .first {
        top: 0;
        right: 0;
      }
      button .second {
        content: "";
        position: absolute;
        left: 25%;
        top: -100%;
        height: 100%;
        width: 25%;
        background: #f1cc0c;
      }

      button:hover .second {
        top: 0;
        left: 50%;
      }

      button .third {
        content: "";
        position: absolute;
        left: 50%;
        height: 100%;
        top: 100%;
        width: 25%;
        background: #f1cc0c;
      }

      button:hover .third {
        top: 0;
        left: 25%;
      }

      button .fourth {
        content: "";
        position: absolute;
        left: 100%;
        top: 0;
        height: 100%;
        width: 25%;
        background: #f1cc0c;
      }

      button:hover .fourth {
        top: 0;
        left: 0;
      }



div.buttonSubmit input, div.buttonSubmit span {

margin-left: 50px;

}

h2 {
  font-size: 40px;
}


li {
  font-size: 20px;
}

#overlay{
  background-color: black;
  z-index: 99;
  position: absolute;
  z-index: 10;
  width: 94%;
  height: 110%;

.guessButton {
  margin: 2%;
  background-color: white;
  border: none;
  color: black;
  font-size: 32px;
  cursor: pointer;
  border-radius: 3px;
  transition-duration: 0.3s;
}


};

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