{% include arcadeSubmenu.html %}

<html>

    <head>
        <style>
        
            body {
              background-color: #DBF9FC;   
            }
            
            #container {
                background: #fff;
                margin: 50px auto;
                width: 400px;
            }
            
            #menu {
                border-bottom: 1px solid #999;
            }
            
            #guess_count {
              float: right;   
            }
            
            #guesses {
              min-height: 200px;   
            }
        
        </style>
    </head>
    <body>
    
        <div id="container">
        
            <div id="menu">
                <input id="max" type="text" placeholder="Max" />
                <button id="gamebtn">New Game</button>
                <span id="guess_count"></span>
            </div>
            <div id="guesses">
            
            </div>
            <div id="footer">
                <input id="aGuess" type="text" placeholder="guess" />
                <button id="guessbtn">Guess</button>
            </div>
        </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script>
    
        $(function(){
           
            var num;
            var guesses;
            
            var max_el = $('#max'),
                gamebtn = $('#gamebtn'),
                count_el = $('#guess_count'),
                guess_el = $('#aGuess'),
                guessbtn = $('#guessbtn'),
                guesses_el = $('#guesses'),
                footer = $('#footer');
            
            footer.hide();
            
            gamebtn.on('click', function(){
                num = getRandomInt(1, parseInt(max_el.val()));
                guesses = 0;
                guesses_el.empty();
                footer.show();
                updateCount();
            });
            
            guessbtn.on('click', function(){
                var myGuess = parseInt(guess_el.val());
                guesses++;
                updateCount();
                if(myGuess == num){
                    guesses_el.append("<p>it took you " + guesses + " guesses</p>");
                    footer.hide();
                } else if( myGuess > num ) {
                    guesses_el.append("<p>lower (" + myGuess + ")</p>");
                } else {
                   guesses_el.append("<p>higher (" + myGuess + ")</p>");
                }
                
                guess_el.val("");
                guess_el.focus();
            });
            
            function updateCount(){
                count_el.text(guesses + " guesses");
            }
                
            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }    
        });
         </script>
    </body>
</html>


