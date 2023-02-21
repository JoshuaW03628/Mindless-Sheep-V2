{% include arcadeSubmenu.html %}


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account</title>
    <style>
        .wrapper2 {
            --padding_val: 20px;
            width: 100% - 2*var(--padding_val);
            padding: var(--padding_val);
        }
        h1 {
            font-size: 32pt;
            text-align: center;
            margin-bottom: 40px;
        }
        h2 {
            text-align: center;
            font-size: 20pt;
            margin-bottom: 25px;
        }
        p {
            --width: 25%;
            --padding: 2%;
            --margin: calc((((100% - var(--width)) - 2*var(--padding))/2));
            width: var(--width);
            margin-left: var(--margin);
            margin-right: var(--margin);
            margin-top: 25px;
            margin-bottom: 25px;
            text-align: center;
            color: #f1cc0c;
            padding: var(--padding);
            font-size: 20px;
            border-radius: 7px;
            background-color: #0000;
            transition-duration: 0.4s;
        }
        .warning {
            --width: 70%;
            --padding: 2%;
            --margin: calc((((100% - var(--width)) - 2*var(--padding))/2));
            width: var(--width);
            margin-left: var(--margin);
            margin-right: var(--margin);
            margin-top: 25px;
            margin-bottom: 25px;
            text-align: center;
            color: #f1cc0c;
            padding: var(--padding);
            font-size: 12pt;
            border-radius: 7px;
            background-color: #302f2f;
            transition-duration: 0.4s;
        }
        p:hover {
            background-color: #1a1a1a;
        }
        .btn {
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
            color: #ff0000;
            border: none;
            transition-duration: 0.3s;
            cursor: pointer;
        }
        .btn:hover {
            color: #fff;
            background-color: #ff0000;
        }
        .delbtn {
            width: 60%;
            margin-left: 20%;
            margin-right: 20%;
            padding: 3%;
        }
        .gbtn {
            width: 60%;
            margin-left: 20%;
            margin-right: 20%;
            padding: 3%;
            color: #f1cc0c;
        }
        .gbtn:hover {
            color: #000;
            background-color: #16f230;
        }
        .cancel {
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
        .cancel:hover {
            color: #000;
            background-color: #f1cc0c;
        }
        .del {
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 500px;
            padding: 20px;
            border-radius: 10px;
            margin-top: 15%;
            z-index: 9;
        }
        .change {
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 500px;
            padding: 20px;
            border-radius: 10px;
            margin-top: 15%;
            z-index: 9;
        }
        .form-container {
            padding: 50px;
            background-color: black;
            box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.4);
        }
        input {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            margin-top: 5%;
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
            margin-bottom: 5%;
            padding: 2%;
            font-size: 20px;
            background-color: #242424;
            color: #fcf6d9;
            border: none;
            border-radius: 5px;
            border-bottom: 4px solid #f1cc0c;
            transition-duration: 0.3s;
        }
        input:focus{
            background-color: #4d4c4b;
            outline: none;
        }
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
            animation: fadeIn 0.5s forwards;
        }
        .animater {
            animation: fadeOut 0.4s forwards;
        }
    </style>
    <script src="{{ site.baseurl }}/arcade/api.js">
    </script>
    <script>
        function openFormDel() {
            form = document.getElementById("del")
            form.style.display = "block";
            form.classList.add("animatef");
        }
        function openFormPwd() {
            form = document.getElementById("changepwd")
            form.style.display = "block";
            form.classList.add("animatef");
        }
        function closeFormDel() { 
            form = document.getElementById("del");
            form.classList.remove("animatef");
            form.classList.add("animater");
            form2 = document.getElementById("changepwd")
            form2.classList.remove("animatef");
            form2.classList.add("animater");
            setTimeout(function() {
                form.style.display = "none";
                form.classList.remove("animater");
                form2.style.display = "none";
                form2.classList.remove("animater");
            }, 400);
        }
        function delAcc() {
            let inp = document.getElementById('userid').value;
            fetch('https://ajarcade.duckdns.org/api/players/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "uid": inp
                })  
                }).then(res => {
                return res.json()
                })
                .then(data => console.log(data))
                .catch(error => console.log('ERROR'))
            setTimeout(function() {
                window.location.replace("https://azeem-khan1.github.io/TripleAJv3/");
            }, 200);
        }
    </script>  
</head>
<body onload="showUserInfo()">
    <div class="wrapper2">
        <h1>Account Information</h1>
        <h2 class="name">Name</h2>
        <p id="nameFull"></p>
        <h2 class="uid">User ID</h2>
        <p id="usernameID"></p>
        <button class="cancel" onclick="openFormPwd()">Change Password</button>
        <button class="btn" onclick="openFormDel()">Delete Account</button>
        <div class="del" id="del">
            <form class="form-container">
                <h2>Delete Account</h2>
                <input type="text" id="userid" placeholder="Please enter your User ID" required>
                <p class="warning"><b>WARNING!</b> By clicking `delete`, you are removing your account from our system. Your tokens will NOT be saved and cannot be replenished!</p>
                <button type="button" class="btn delbtn" onclick="delAcc()">Delete</button>
                <button type="button" class="cancel" onclick="closeFormDel()">Cancel</button>
            </form>
        </div>
        <div class="change" id="changepwd">
            <form class="form-container">
                <h2>Change Password</h2>
                <input type="password" placeholder="Please enter your old password" required>
                <input type="password" placeholder="Please enter your new password" required>
                <input type="password" placeholder="Please re-enter your new password" required>
                <button type="button" class="gbtn btn" onclick="putPWD()">Update Password</button>
                <button type="button" class="cancel" onclick="closeFormDel()">Cancel</button>
            </form>
        </div>
    </div>
</body>
</html>
