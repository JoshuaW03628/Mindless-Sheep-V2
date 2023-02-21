function signUp() {
    // clear all local data
    localStorage.clear();
    let userid = document.getElementById('usrnm').value;
    // store uid locally to be able to access the user's info around the arcade
    localStorage.setItem("currentUser", userid);
    let nm = document.getElementById('name').value;
    let pwd = document.getElementById('pswd').value;
    let pw2 = document.getElementById('pswdv').value;
    // idiot-proofing
    if (pwd === "") {
        document.getElementById('pswd').placeholder = "Please Enter A Password";
        document.getElementById('pswd').style.borderBottomColor = "red";
    }
    else if (pw2 == pwd) {
        // posting to database
        fetch('https://ajarcade.duckdns.org/api/players/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": null,
                "name": nm,
                "password": pwd,
                "tokens": 20,
                "uid": userid
            })  
            }).then(res => {
            return res.json()
            })
            .then(data => console.log(data))
            .catch(error => console.log('ERROR'))
        // redirecting to account page
        setTimeout(function() {
            window.location.replace("../account");
        }, 600);
    }
    else {
        // more idiot-proofing
        document.getElementById('pswdv').value = "";
        document.getElementById('pswdv').placeholder = "Passwords don't match";
        document.getElementById('pswdv').style.borderBottomColor = "red";
    }
}


// Helps identify what type of object is being returned (utility function)
function getType(p) {
    if (Array.isArray(p)) return 'array';
    else if (typeof p == 'string') return 'string';
    else if (p != null && typeof p == 'object') return 'object';
    else return 'other';
}

function showUID() {
    const id = localStorage.getItem('currentUser');
    let nameField = document.getElementById('nameFull');
    let idField = document.getElementById('usernameID');
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