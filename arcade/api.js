function signUp() {
    fetch('https://ajarcade.duckdns.org/api/players/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": null,
            "name": "Joe Biden",
            "password": "sleepyJoe123",
            "tokens": 20,
            "uid": "PresBiden"
        })  
    })  .then(res => {
        return res.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log('ERROR'))
}