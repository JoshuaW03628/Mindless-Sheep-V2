{% include arcadeSubmenu.html %}


<html lang="en">
<!-- basically adding in a stylesheet that allows for me to use different fonts and creating the title for the game. -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/336de93654.js" defer></script>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hi-Lo Game</title>
</head>

<!-- Creates Div to overlay the main page, rulebook page -->
<body onload="randomNum()">
<div id="overlay">
  <h2>Hi-Lo Rules;</h2>
  <li>Guess a number from 1-100, the an arrow will tell you wether the random number is higher or lower, you continue to guess based off of these clues until you guess the number.</li><br>
  <li> Tokens: It costs 15 Tokens to play. You start off with 25 tokens in game and each guess you make takes away 1. So if you made 5 guesses you would earn 20 tokens - the original 15 you spent.</li>

  <div class="container">
    <div class="center">
      <body>
        <button class= "button1" onclick="startgame()">
          15 <img class="tokenicon" src="{{ site.baseurl }}/images/AJToken_60x60.png"> to play
          <!-- Inline element for button, makes it easier to style. -->
          <span class="first"></span> 
          <span class="second"></span>
          <span class="third"></span>
          <span class="fourth"></span>
        </button>
      </body>
    </div>
  </div>
</div>
<!-- creating main page/div for the game -->
  <div class="mainContainer" id="mainContainer"> 
    <div class="vCenter">
      <h1 style="font-size: 32pt;">Hi-Lo</h1>
      <i class='fas fa-question-circle' id='theIcon'></i>
      <div class="theGuessing" id="theGuessing">
        <h1 style="font-size: 16pt;">Choose a number between 1 and 100</h1><br>
        <input type="text" id="numInput" class="numInput" te /><br><br>
        <input type="button" value="Make Your Guess!" onclick="guessNum()" class="guessButton" id="guessButton">
      </div>
      <div id="congo" style="display: none;">
        <br>
        <h1 style="font-size: 71px; margin-top: -4%;" id="correctNum"></h1><br>
        <h1 style="font-size: 16pt; margin-bottom: 4%;">Congratulations! You guessed correct number in <b id="counter" style="font-size: 16pt;"></b> guesses <br><br> You earned <b id="tokens" style="font-size: 18pt; color: #f1cc0c;"></b> tokens! <br><br> That's a profit of <b id="profit" style="font-size: 18pt; color: #f1cc0c;"></b> tokens!</h1>
        <input type="button" value="Play Again!" onclick="location.reload()" class="guessButton">
      </div>
      <br>
      <p id="guessssses">Number of guesses: <b id="counter2"></b></p>
    </div>
  </div>

</body>
</html>

<style>

  /*Token Icon for button*/
.tokenicon {
    width: 28px;
    margin-top: -5px;
    vertical-align: middle;
}
/*Effects for the Icon*/
#theIcon {
  font-size: 70px;
  margin: 4%;
}

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


/*CSS for the button itself*/
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
/* Enter hover effect for the drippy button */
button:hover {
  color: #f1cc0c;
}
span {
  transition: all 0.9s;
  z-index: -1;
}
/* Creates the transitional effect bringing in the yellow piece*/
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
/* changes text size for rule-book */
h2 {
  text-align: center;
  font-size: 40px;
}

li {
  font-size: 20px;
}
/*CSS for the overlay div*/
#overlay{
  border-radius: 20px;
  background-color: #302f2f;
  z-index: 99;
  position: absolute;
  z-index: 10;
  width: 84.4%;
  padding: 5%;
}
/* css for the guess button on the bottom */
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
/*this is the fade animation for the exit of the first div, Azeem showed me*/
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
.animatef {
    animation: fadeIn 0.9s forwards;
}
.animater {
    animation: fadeOut 0.5s forwards;
}

/* font css */
* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
/* Css for the main div */
.mainContainer {
  position: absolute;
  width: 94%;
  text-align: center;
}

/* CSS for font in the input button */
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
/* when you click on the guess button it makes it white */
.numInput:focus {
  border-color: white;
}
/* style for the guess button */
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
/* makes the hover over the guess button white */
.guessButton:hover {
  background-color: white;
}

</style>
<script>
    // updates local storage with accurate token amount based upon which user is signed in
    function getTokens() {
        const id = localStorage.getItem('currentUser');
        fetch('https://ajarcade.duckdns.org/api/players/')
            .then(response => {
                // trap error response from Web API
                if (response.status !== 200) {
                    const message = 'Fetch error: ' + response.status + " " + response.statusText;
                    alert(message);
                    return;
                }
                // Valid response will contain json data
                response.json().then(data => {
                    // iterate through the whole database and find a record that matches the uid
                    for (i in data) {
                        if (data[i].uid == id) {
                            localStorage.setItem('tokenAmt', data[i].tokens);
                        }
                    }
                })
            })
    }
    // removes 'amt' tokens from the user's tokens attribute
    function remTokens(amt) {
        const id = localStorage.getItem('currentUser');
        // update the user's token amount
        getTokens();
        var tokenAmt = localStorage.getItem('tokenAmt');
        newAmt = tokenAmt-amt;
        fetch('https://ajarcade.duckdns.org/api/players/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "uid": id,
                "data": {"tokens": newAmt}
            })
        })
            .then(res => {
                return res.json()
            })
            .then(data => console.log(data))
        setTimeout(function() {
            getTokens();
        }, 500);
    }
    // adds 'score' tokens to the user's tokens attribute (called after the game is over)
    function addTokens(score) {
        const id = localStorage.getItem('currentUser');
        // update the user's token amount
        getTokens();
        tokenAmt = localStorage.getItem('tokenAmt');
        newAmt = parseFloat(tokenAmt) + parseFloat(score);
        fetch('https://ajarcade.duckdns.org/api/players/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "uid": id,
                "data": {"tokens": newAmt}
            })
            }).then(res => {
            return res.json()
            })
            .then(data => console.log(data))
        setTimeout(function() {
            getTokens();
        }, 500);
    }
// Gets rid of the rule page, shifts to main game page
function startgame() {
  let div = document.getElementById("overlay");
  div.classList.add("animater");
  setTimeout(function() {
    div.style.display = "none";
    div.classList.remove("animater");
  }, 500);
  // Charges the user 15 tokens to play
  remTokens(15);
}

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
  profit=tokens-15;
  document.getElementById("counter2").innerHTML = counter;
  document.getElementById("counter").innerHTML = counter;
  document.getElementById("tokens").innerHTML = tokens;
  document.getElementById("profit").innerHTML = profit;
  var numIn = document.getElementById("numInput").value;
  if (numIn > theNum) {
    document.getElementById("theIcon").className = "fas fa-arrow-down";
  } else if (numIn < theNum) {
    document.getElementById("theIcon").className = "fas fa-arrow-up";
  } else if (numIn == theNum) {
    addTokens(tokens)
    document.getElementById("theIcon").className = "fas fa-check-circle";
    document.getElementById("theGuessing").style.display = "none";
    document.getElementById("correctNum").innerHTML = theNum;
    document.getElementById("guessssses").style.display = "none";
    document.getElementById("congo").style.display = "block";

  }
  document.getElementById("numInput").value = "";
}
</script>