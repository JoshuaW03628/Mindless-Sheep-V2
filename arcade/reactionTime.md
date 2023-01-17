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
            text-align: center;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 100px;
            margin: auto;
            padding: 25%;
            padding-top: 16.8%;
            padding-bottom: 16.8%;
        }
        .circle {
            position: fixed;
            width: 50%;
            left: 25%;
            z-index: 10;
        }
    </style>
    <div id="outer">
            <p class="countdown">3</p>
            <img src="{{ site.baseurl }}/arcade/imgs/circle.png" class="circle" draggable="false">
    </div>

</body>
</html>