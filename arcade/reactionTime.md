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
    var score = 0;
    function hidetargets() {
        document.getElementById("circle").style.display = "none";
        document.getElementById("go").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("1").style.display = "none";
        document.getElementById("playnow").style.display = "none";
        document.getElementById("scoreend").style.display = "none";
        document.getElementById("scoredisplay").style.display = "none";
        document.getElementById("rules").style.display = "none";
        document.getElementById("tryagain").style.display = "none";
        document.getElementsByClassName('progress-bar')[0].style.display = "none";
    }
    function progbar() {
        const progressBar = document.getElementsByClassName('progress-bar')[0]
        const computedStyle = getComputedStyle(progressBar);
        let id = setInterval(() => {
            const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
            progressBar.style.setProperty('--width', width + .027);
            if (width >=100)
                progressBar.style.setProperty('--width', 100);
        });
        const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
        if (width >=100)
            clearInterval(id);
    }
    function countdown() {
        score = 0
        var audio = new Audio('{{ site.baseurl }}imgs/countdown.mp3');
        var audio2 = new Audio('{{ site.baseurl }}imgs/go.mp3')
        hidetargets();
        audio.play();
        document.getElementById("3").style.display = "block";
        setTimeout(function() {
            audio.play();
            document.getElementById("3").style.display = "none";
            document.getElementById("2").style.display = "block";
            setTimeout(function() {
                audio.play();
                document.getElementById("2").style.display = "none";
                document.getElementById("1").style.display = "block";
                    setTimeout(function() {
                    audio2.play();
                    document.getElementById("1").style.display = "none";
                    document.getElementById("go").style.display = "block";
                    setTimeout(function() {
                        document.getElementById("go").style.display = "none";
                        document.getElementById("circle").style.display = "block";
                        document.getElementById("scoredisplay").style.display = "block";
                        document.getElementsByClassName('progress-bar')[0].style.display = "block";
                        progbar()
                        document.getElementsByClassName('progress-bar')[0].style.setProperty('--width', 0);
                        setTimeout(function() {
                            hidetargets();
                            document.getElementById("tryagain").style.display = "block";
                            document.getElementById("scoreend").style.display = "block";
                            document.getElementById("endspan").innerHTML = score;
                            document.getElementById("endTokens").innerHTML = score - 15 + " ";
                        }, 15000);
                    }, 700);
                }, 750);
            }, 750);
        }, 750);
    }
    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function gameplay() {
        var ding = new Audio('{{ site.baseurl }}imgs/ding.mp3');
        ding.play();
        score = score + 1;
        width = generateRandomIntegerInRange(40, 130);
        y = generateRandomIntegerInRange(500, 750);
        x = generateRandomIntegerInRange(50, 780);
        document.getElementById("circle").style.width = width + "px";
        document.getElementById("circle").style.height = width + "px";
        document.getElementById("circle").style.borderRadius = width / 2 + "px";
        document.getElementById("circle").style.left = x/10 + "%";
        document.getElementById("circle").style.top = y/10 + "%";
        document.getElementById("scrdisp").innerHTML = score;
    }
    </script>
    <style>
        .progress-bar {
            position: absolute;
            top: 780px;
            left: 22px;
            width: 645px;
            height: 2em;
            z-index: -1;
            background-color: ;
        }
        .progress-bar::before {
            content: '';
            display: flex;
            align-items: center;
            position: absolute;
            top: 1em;
            bottom: 0em;
            width: calc(var(--width, 0) * 1%);
            max-width: 100%;
            background-color: #f1cc0c;
        }
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
    </style>
    <h1>Reaction Time</h1>
    <div id="outer">
        <div id="rules">
            <h2 style="font-size: 20pt; margin-bottom: 20px;">Rules</h2>
            <p style="font-size: 12pt;">You have 15 seconds to click as many targets as you can. <br><br> Your score = the tokens you earn (need 15 to break even!)</p>
        </div>
        <p class="scoreDisplay" id="scoredisplay">Score: <span id="scrdisp" style="color: #f1cc0c;">0</span></p>
        <button type="button" class="playnow" id="playnow" value="" onclick="countdown()">Start Game for 15 <img class="tokenicon" src="{{ site.baseurl }}/images/AJToken_60x60.png"></button>
        <p class="countdown" id="3">3</p>
        <p class="countdown" id="2">2</p>
        <p class="countdown" id="1">1</p>
        <p class="countdown" id="go">GO</p>
        <div class="circle" id="circle" onclick="gameplay()"></div>
        <div class="progress-bar" style="--width: 0"></div>
        <p class="scoreDisplay" id="scoreend">Congratulations! Your score was <span id="endspan" style="color: #f1cc0c"></span><br><br>You earned <span id="endTokens" style="color: #f1cc0c"></span><img class="tokenicon" src="{{ site.baseurl }}/images/AJToken_60x60.png"></p>
        <button type="button" class="playnow" id="tryagain" value="" onclick="countdown()">Try again for 15 <img class="tokenicon" src="{{ site.baseurl }}/images/AJToken_60x60.png"></button>
    </div>
    
</body>
</html>