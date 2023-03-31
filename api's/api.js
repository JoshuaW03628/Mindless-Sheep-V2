function signUp() {
    // clear all local data
    localStorage.clear();
    let userid = document.getElementById('usrnm').value;
    let nm = document.getElementById('name').value;
    let pwd = document.getElementById('pswd').value;
    let pw2 = document.getElementById('pswdv').value;

    fetch('https://ajarcade.duckdns.org/api/players/')
    .then(response => {
        // trap error response from Web API
        if (response.status !== 200) {
            const message = 'Error: ' + response.status + " " + response.statusText;
            alert(message);
            return;
        }
        // Valid response will contain json data
        response.json().then(data => {
            // iterate through the whole database and find if there are any duplicate uids
            for (i in data) {
                if (data[i].uid == userid) {
                    localStorage.setItem('uidStatus', true)
                }
                else {
                    localStorage.setItem('uidStatus', false)
                }
            }
        })
    })
    setTimeout(function() {
        let uidStatus = localStorage.getItem('uidStatus')
        console.log(uidStatus)
        // tells user if they have a duplicate uid
        if (uidStatus === 'true') {
            console.log('activated')
            const field = document.getElementById('usrnm');
            field.value = "";
            field.setAttribute('placeholder', 'That username is taken');
            field.style.borderBottomColor = "red";
        }
        // idiot proofing the uid field
        else if (userid === "") {
            document.getElementById('usrnm').placeholder = "Please enter a username";
            document.getElementById('usrnm').style.borderBottomColor = "red";
        }
        // idiot proofing the name field
        else if (nm === "") {
            document.getElementById('name').placeholder = "Please Enter Your Full Name";
            document.getElementById('name').style.borderBottomColor = "red";
        }
        // idiot-proofing
        else if (pwd === "") {
            document.getElementById('pswd').placeholder = "Please Enter A Password";
            document.getElementById('pswd').style.borderBottomColor = "red";
        }
        // more idiot-proofing
        else if (pw2 != pwd) {
            document.getElementById('pswdv').value = "";
            document.getElementById('pswdv').placeholder = "Passwords don't match";
            document.getElementById('pswdv').style.borderBottomColor = "red";
        }
        else {
            // posting to database
            fetch('https://ajarcade.duckdns.org/api/players/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": nm,
                    "password": pwd,
                    "tokens": 30,
                    "uid": userid
                })  
                }).then(res => {
                return res.json()
                })
                .then(data => {
                    // store uid locally to be able to access the user's info around the arcade
                    localStorage.setItem("currentUser", data.uid)
                    localStorage.setItem("tokenAmt", 30);
                    console.log(localStorage.getItem('currentUser'))
                    console.log(data)})
                .catch(error => console.log('ERROR'))
            // redirecting to account page
            setTimeout(function() {
                window.location.replace("https://azeem-khan1.github.io/TripleAJv3/arcade/account");
            }, 700);
        }
    }, 600);
}


// Helps identify what type of object is being returned (utility function)
function getType(p) {
    if (Array.isArray(p)) return 'array';
    else if (typeof p == 'string') return 'string';
    else if (p != null && typeof p == 'object') return 'object';
    else return 'other';
}

function showUserInfo() {
    // current user's uid was saved locally from signup page
    const id = localStorage.getItem('currentUser');
    const nameField = document.getElementById('nameFull');
    const idField = document.getElementById('usernameID');
    // fetch info from db
    fetch('https://ajarcade.duckdns.org/api/players/')
    .then(response => {
        // trap error response from Web API
        if (response.status !== 200) {
            const message = 'Login error: ' + response.status + " " + response.statusText;
            alert(message);
            return;
        }
        // Valid response will contain json data
        response.json().then(data => {
            // iterate through the whole database and find a record that matches the uid
            for (i in data) {
                if (data[i].uid == id) {
                    const uidDisp = data[i].uid;
                    idField.innerHTML = uidDisp;
                    const nameDisp = data[i].name;
                    nameField.innerHTML = nameDisp;
                }
            }
        })
    })
};