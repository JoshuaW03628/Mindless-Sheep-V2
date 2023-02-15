
function signUp() {
    fetch('https://ajarcade.duckdns.org/api/players/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": null,
            "name": "Billy Bob",
            "uid": "billyB",
            "password": "billyisBest",
            "tokens": 20
        })
    }).then(res => {
        return res.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log('ERROR'))
}