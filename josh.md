# Frontend Development

As the frontend developer of the team it is my job to make sure that the site and style of the site is cool and the User Experience for our Fastpages/Frontend Site is good and easy to use for the viewer. So to start of that process There was a few things that I layed out to do for this week, this includes;

- Creation of a Logo.
- Creative Submenu.
- Login/Signup Space.

----------------------------------------------------------------------------------------------------------------
# Login Tables


### Basic Frontend Input Table Ex 1

One example of a UX Information Input Table.

<table>
    <tr>
        <th><label for="name">Name</label></th>
        <th><label for="email">Email</label></th>
        <th><label for="password">Password</label></th>
        <th><label for="phone">Phone</label></th>
    </tr>
    <tr>
        <td><input type="text" name="name" id="name" required></td>
        <td><input type="email" name="email" id="email" placeholder="abc@xyz.org" required></td>
        <td><input type="password" name="password" id="password" required></td>
        <td><input type="tel" name="phone_num" id="phone_num"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="999-999-9999"></td>
        <td ><button onclick="create_User()">Create</button></td>
    </tr>
</table>

-----------------------------------------------------------------------------------------------------------------

### Frontend Sign-up Example 2

This is another example login format that we could use.


<form action="create_User()">
    <p><label>
        Name:
        <input type="text" name="name" id="name" required>
    </label></p>
    <p><label>
        User ID:
        <input type="text" name="uid" id="uid" required>
    </label></p>
    <p><label>
        Password:
        <input type="password" name="password" id="password" required>
        Verify Password:
        <input type="password" name="passwordV" id="passwordV" required>
    </label></p>
    <p><label>
        Phone:
        <input type="tel" name="phone_num" id="phone_num"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="999-999-9999">
    </label></p>
    <p><label>
        Birthday:
        <input type="date" name="dob" id="dob">
    </label></p>
    <p>
        <button>Create</button>
    </p>
</form>

-------------------------------------------------------------------------------------------------------

### Login Form Final Usage.

This is the current login for the website which is still a work in progress as but we have the buttons with a function, we just need to get our flask up and running so that we can store data from here to there. The UX is good and its easy to navigate with a good looking design.

<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
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
          width: 50%;
          margin-left: 25%;
          margin-right: 30%;
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
        #dontacc {
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          font-size: 25px;
          text-align: center;
          margin-bottom: 0%;          
        }
    </style>
    

  </head>
  <body>
    <h1 class="header">
      Log In
    </h1>
    <input type="username" class="login" id="usrnm" placeholder="Username">
    <input type="password" class="login" id="pswd" placeholder="Password">
    <div>
    <br>
      <button id="enter" type="button">Enter</button>
      <div class="noacc">
       <p id="dontacc">Don't have an account?</p>
      </div>
      <button id="signup" type="button">Sign up</button>
    </div>
    
  </body>
  <script>
      // Get the input field
      var input = document.getElementById("pswd");
      // Execute a function when the user presses a key on the keyboard
      input.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          event.preventDefault();
          // Trigger the button element with a click
          document.getElementById("enter").click();
        }
      });
    </script>
</html>

----------------------------------------------------------------------------------

# Logo

As we are building an Arcade, their is a need for a team and brand logo. Azeem and I were working in class to develop one and came up with this design;

![TripleAJ Arcade Logo](/images/TripleAJArcade-highres.png)


It is our team name along with what we tried to make look like a token to symbolize the currency needed to play games.

---------------------------------------------------------------------------------------------------------------------------

# Submenu with access to Games.

- Will be seen at the top of the screen.