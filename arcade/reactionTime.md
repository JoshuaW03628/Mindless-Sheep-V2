{% include arcadeSubmenu.html %}

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reaction Time</title>
</head>
<body>
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
    var score = 0;
    // general function to get rid of all the elements in the game window
    function hidetargets() {
        document.getElementById("circle").style.display = "none";
        document.getElementById("cd").style.display = "none";
        document.getElementById("playnow").style.display = "none";
        document.getElementById("scoreend").style.display = "none";
        document.getElementById("scoredisplay").style.display = "none";
        document.getElementById("rules").style.display = "none";
        document.getElementById("tryagain").style.display = "none";
    }
    // Initializes the progress bar
    function progbarinit() {
        const bar = document.getElementById('bar');
        bar.style.display = 'block';
        bar.classList.add('fill');
    }
    // Starts the game
    function countdown() {
        remTokens(15)
        score = 0
        document.getElementById("scrdisp").innerHTML = score;
        var audio = new Audio('{{ site.baseurl }}/arcade/imgs/countdown.mp3');
        var audio2 = new Audio('{{ site.baseurl }}/arcade/imgs/go.mp3')
        var audio3 = new Audio('{{ site.baseurl }}/arcade/imgs/gameover.mp3')
        hidetargets();
        audio.play();
        document.getElementById("cd").innerHTML = '3';
        document.getElementById("cd").style.display = "block";
        setTimeout(function() {
            audio.play();
            document.getElementById("cd").innerHTML = '2';
            setTimeout(function() {
                audio.play();
                document.getElementById("cd").innerHTML = '1';
                    setTimeout(function() {
                    audio2.play();
                    document.getElementById("cd").innerHTML = 'GO';
                    setTimeout(function() {
                        // hide countdown
                        document.getElementById("cd").style.display = "none";
                        // show game elements
                        document.getElementById("circle").style.display = "block";
                        document.getElementById("scoredisplay").style.display = "block";
                        // reset progress bar
                        progbarinit()
                        // The next timeout ends the game after 15 seconds
                        setTimeout(function() {
                            audio3.play();
                            hidetargets();
                            // show end screen elements
                            document.getElementById("tryagain").style.display = "block";
                            document.getElementById("scoreend").style.display = "block";
                            // display stats
                            document.getElementById("endspan").innerHTML = score;
                            document.getElementById("endTokens").innerHTML = score - 15 + " ";
                            // remove progress bar from end screen
                            const bar = document.getElementById('bar');
                            bar.classList.remove('fill');
                            bar.style.display = 'none';
                            // update tokens in database
                            addTokens(score);
                        }, 15000);
                    }, 700);
                }, 750);
            }, 750);
        }, 750);
    }
    // generates a random # between two values
    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function gameplay() {
        var ding = new Audio('{{ site.baseurl }}/arcade/imgs/ding.mp3');
        ding.play();
        const circle = document.getElementById("circle");
        score = score + 1;
        width = generateRandomIntegerInRange(40, 130);
        y = generateRandomIntegerInRange(520, 750);
        x = generateRandomIntegerInRange(50, 780);
        circle.style.width = width + "px";
        circle.style.height = width + "px";
        circle.style.borderRadius = width / 2 + "px";
        circle.style.left = x/10 + "%";
        circle.style.top = y/10 + "%";
        document.getElementById("scrdisp").innerHTML = score;
    }
    </script>
    <style>
        h1 {
            font-size: 32pt;
            text-align: center;
            margin-bottom: 30px;
            margin-top: 20px;
        }
        #outer {
            width: 99%;
            height: 500px;
            border: 3px solid #f1cc0c;
            border-radius: 30px;
        }
        .countdown {
            display: none;
            text-align: center;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 100px;
            margin-top: 27%;
            margin-left: auto;
            margin-right: auto;
            z-index: 1;
        }
        .circle {
            display: none;
            position: absolute;
            top: 60%;
            left: 42.5%;
            width: 100px;
            height: 100px;
            border-radius: 50px;
            background-color: #f1cc0c;
        }
        .playnow {
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
        .playnow:hover {
          color: #242424;
          background-color: #f1cc0c;
        }
        #tryagain {
            display: none;
            margin-top: 12%;
        }
        #scoredisplay {
            display: none;
            font-size: 20pt;
            text-align: center;
            width: 30%;
            margin-top: 3%;
            margin-left: auto;
            margin-right: auto;
            border-radius: 15px;
            background-color: #3b3a3a;
            padding-bottom: 5px;
        }
        #scoreend {
            display: none;
            font-size: 20pt;
            text-align: center;
            width: 80%;
            margin-top: 5%;
            margin-left: auto;
            margin-right: auto;
            border-radius: 15px;
            background-color: #3b3a3a;
            padding: 25px;
            padding-top: 24%;
            padding-bottom: 24%;
        }
        .tokenicon {
            width: 28px;
            margin-top: -5px;
            vertical-align: middle;
        }
        #rules {
            padding: 30px;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            text-align: center;
            background-color: #302f2f;
        }
        .fill {
            animation: fill 14.85s linear 1;
        }
        @keyframes fill {
            0% {
                width: 0%;
            }
            100% {
                width: 100%;
            }
        }
        .progress {
            --bs-progress-height: 1.25rem;
            --bs-progress-font-size: 0.75rem;
            --bs-progress-bg: #f1cc0c;
            --bs-progress-bar-bg: #f1cc0c;
            --bs-progress-bar-transition: width 0.6s ease;
            margin-bottom: 20px;
            position: relative;
            top: 10px;
            display: none;
            height: var(--bs-progress-height);
            border-radius: 7px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            overflow: hidden;
            font-size: var(--bs-progress-font-size);
            background-color: var(--bs-progress-bg);
        }
    </style>
    <h1>Reaction Time</h1>
    <div id="outer">
        <div id="rules">
            <h2 style="font-size: 20pt; margin-bottom: 20px;">Rules</h2>
            <p style="font-size: 12pt;">You have 15 seconds to click as many targets as you can. <br><br> Your score = the tokens you earn (need 15 to break even!)</p>
        </div>
        <div class="progress" id="bar"></div>
        <p class="scoreDisplay" id="scoredisplay">Score: <span id="scrdisp" style="color: #f1cc0c;">0</span></p>
        <button type="button" class="playnow" id="playnow" value="" onclick="countdown()">Start Game for 15 <img class="tokenicon" src="{{ site.baseurl }}/images/AJToken_60x60.png"></button>
        <p class="countdown" id="cd">3</p>
        <div class="circle" id="circle" onclick="gameplay()"></div>
        <p class="scoreDisplay" id="scoreend">Congratulations! Your score was <span id="endspan" style="color: #f1cc0c"></span><br><br>You earned <span id="endTokens" style="color: #f1cc0c"></span><img class="tokenicon" src="{{ site.baseurl }}/images/AJToken_60x60.png"></p>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <button type="button" class="playnow" id="tryagain" value="" onclick="countdown()">Try again for 15 <img class="tokenicon" src="{{ site.baseurl }}/images/AJToken_60x60.png"></button>
    </div>
</body>
</html>