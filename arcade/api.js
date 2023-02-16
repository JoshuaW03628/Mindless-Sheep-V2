function signUp() {
    // clear all local data
    localStorage.clear();
    let userid = document.getElementById('usrnm').value;
    // store uid and name locally to access on account page (temporary)
    localStorage.setItem("currentUser", userid);
    let nm = document.getElementById('name').value;
    localStorage.setItem("currentName", nm);
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


function showUID() {
    let _name = "";
    let nameField = document.getElementById('nameFull');
    let idField = document.getElementById('usernameID');
    // display info on account page
    idField.innerHTML = localStorage.getItem('currentUser')
    nameField.innerHTML = localStorage.getItem('currentName')
    /* fetch('https://ajarcade.duckdns.org/api/players/')
        .then(res => res.json())
        .then(data => _name = data)

    console.log(_name);
    nameField.innerHTML = _name; */
};