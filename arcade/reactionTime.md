{% include arcadeSubmenu.html %}

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reaction Time</title>
</head>
<body>
    <style>
        #outer {
            width: 100%;
            height: 50%;
            border: 3px solid #f1cc0c;
        }
        .countdown {
            position: fixed;
            text-align: center;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 100px;
            width: 41%;
            margin-top: 6.5%;
            z-index: 1;
        }
        .circle {
            position: relative;
            width: 50%;
            left: 25%;
            top: 6%;
            z-index: 10;
        }
    </style>
    <div id="outer">
            <p class="countdown" id="countdown">3</p>
            <img src="{{ site.baseurl }}/arcade/imgs/circle.png" class="circle" draggable="false">
            <div id="innerScore">
                <p class="scoreDisplay"></p>
            </div>
    </div>
    <script>
        var score = 0;
        function countdown() {
            document.getElementById("countdown").innerHTML(3);
            setTimeout(function() {
                document.getElementById("countdown").innerHTML(2);
            }, 750);
        }
    </script>
</body>
</html>