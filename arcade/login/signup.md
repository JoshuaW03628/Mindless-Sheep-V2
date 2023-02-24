<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sign Up</title>
    <style>
        h1 {
          text-align: center;
          font-size: 40px;
          font-weight: 700;
          color: #fcf6d9;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
        input.login {
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          margin-top: 5%;
          position: inline;
          width: 65%;
          margin-left: 17.5%;
          margin-right: 17.5%;
          padding: 2%;
          font-size: 25px;
          background-color: #242424;
          color: #fcf6d9;
          border: none;
          border-radius: 5px;
          border-bottom: 4px solid #f1cc0c;
          transition-duration: 0.3s;
        }
        input.login:focus {
          border-bottom-color: #f1cc0c;
          background-color: #4d4c4b;
          outline: none;
        }
        button {
          outline: none;
          -webkit-tap-highlight-color: transparent;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          font-size: 20px;
          margin-top: 4%; 
          margin-bottom: 4%;
          position: inline;
          width: 40%;
          margin-left: 30%;
          margin-right: 30%;
          padding: 2%;
          border-radius: 8px;
          background-color: #302f2f;
          color: #f1cc0c;
          border: none;
          transition-duration: 0.3s;
        }
        button:hover {
          color: #242424;
          background-color: #f1cc0c;
          width: 45%;
          margin-left: 27.5%;
          margin-right: 27.5%;
          margin-bottom: 3%;
          padding: 2.5%;
        }
        div.noacc {
          margin-top: 4%;
          margin-left: 25%;
          margin-right: 25%;
          position: inline;
          width: 50%;
        }
        #alracc {
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          font-size: 25px;
          text-align: center;
          margin-bottom: 0%;          
        }
    </style>

  </head>
  <body>
    <h1 class="header">Sign Up</h1>
    <input type="" class="login" id="usrnm" placeholder="Username" required>
    <input type="" class="login" id="name" placeholder="Full Name (will be displayed publicly)" required>
    <input type="password" class="login" id="pswd" placeholder="Password" required>
    <input type="password" class="login" id="pswdv" placeholder="Re-type Password" required>
    <div>
    <br>
      <button id="enter" type="button" onclick="signUp()">Create Account</button>
      <div class="noacc">
       <p id="alracc">Already have an account?</p>
      </div>
      <button id="login" type="button" onclick="window.location.href='{{ site.baseurl }}/';">Log In</button>
    </div>
  </body>
  <script src="{{ site.baseurl }}/arcade/api.js"></script>
  <script>
      // Get the input fields
      var input = [document.getElementById("usrnm"), document.getElementById("name"), document.getElementById("pswd"), document.getElementById("pswdv")];
      for (i in input) {
        // Execute a function when the user presses a key on the keyboard
        input[i].addEventListener("keypress", function(event) {
          // If the user presses the "Enter" key on the keyboard
          if (event.key === "Enter") {
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("enter").click();
          }
        });
      }
    </script>
</html>