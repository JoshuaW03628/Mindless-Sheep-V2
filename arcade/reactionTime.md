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
    }
    function countdown() {
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
                        document.getElementById("scoredisplay").innerHTML = "Score: " + score;
                        setTimeout(function() {
                            hidetargets();
                            document.getElementById("scoreend").style.display = "block";
                            document.getElementById("scoreend").innerHTML = "Total score: " + score;
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
        width = generateRandomIntegerInRange(5, 25);
        y = generateRandomIntegerInRange(10, 30);
        x = generateRandomIntegerInRange(0, 60);
        document.getElementById("circle").style.width = width + "%";
        document.getElementById("circle").style.marginTop = y + "%";
        document.getElementById("circle").style.marginLeft = x + "%";
        document.getElementById("scoredisplay").innerHTML = "Score: " + score;
    }
    </script>
    <style>
        #outer {
            width: 100%;
            height: 50%;
            border: 3px solid #f1cc0c;
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
            width: 20%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10%;
            z-index: 10;
        }
        #playnow {
          outline: none;
          -webkit-tap-highlight-color: transparent;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          font-size: 30px;
          margin-top: 35%; 
          margin-bottom: 4%;
          position: inline;
          width: 60%;
          margin-left: 20%;
          margin-right: 20%;
          padding: 2%;
          border-radius: 8px;
          background-color: #302f2f;
          color: #f1cc0c;
          border: none;
          transition-duration: 0.3s;
        }
        #playnow:hover {
          color: #242424;
          background-color: #f1cc0c;
        }
        #scoredisplay {
            display: none;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 35px;
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
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 35px;
            text-align: center;
            width: 40%;
            margin-top: 10%;
            margin-left: auto;
            margin-right: auto;
            border-radius: 15px;
            background-color: #3b3a3a;
            padding-bottom: 5px;
        }
    </style>
    <div id="outer">
        <p class="scoreDisplay" id="scoredisplay"></p>
        <input type="button" id="playnow" value="Start Game for 15 Tokens" onclick="countdown()">
        <p class="countdown" id="3">3</p>
        <p class="countdown" id="2">2</p>
        <p class="countdown" id="1">1</p>
        <p class="countdown" id="go">GO</p>
        <img src="{{ site.baseurl }}/arcade/imgs/circle.png" class="circle" id="circle" draggable="false" onclick="gameplay()">
        <p class="scoreDisplay" id="scoreend"></p>
    </div>
    
</body>
</html>