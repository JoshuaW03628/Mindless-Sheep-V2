let currentUser = 


function signUp() {
    let userid = document.getElementById('usrnm').value;
    let nm = document.getElementById('name').value;
    let pwd = document.getElementById('pswd').value;
    let pw2 = document.getElementById('pswdv').value;
    if (pwd === "") {
        document.getElementById('pswd').placeholder = "Please Enter A Password";
        document.getElementById('pswd').style.borderBottomColor = "red";
    }
    else if (pw2 == pwd) {
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

        window.location.replace("https://azeem-khan1.github.io/TripleAJv3/arcade/account");
    }
    else {
        document.getElementById('pswdv').value = "";
        document.getElementById('pswdv').placeholder = "Passwords don't match";
        document.getElementById('pswdv').style.borderBottomColor = "red";
    }
}
