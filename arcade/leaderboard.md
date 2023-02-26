{% include arcadeSubmenu.html %}

<html>
<title>Leaderboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<body onload='sort()'>

<style>
  * {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  h1 {
    font-size: 32pt;
    text-align: center;
    margin-top: 40px;
  }
  table.board {
    font-size: 13pt;
    border-collapse: collapse;
    margin: 25px 0;
    margin-top: 40px;
    width: 90%;
    height: 50%;
  }
  .board thead tr {
    font-size: 17pt;
    font-weight: bold;
    background-color: #f1cc0c;
    color: #000000;
    text-align: left;
  }
  .board td {
    text-align: center;
    padding: 12px 15px;
    border: none;
    height: 50px;
  }
  .board tbody tr {
    border: none;
    transition-duration: 0.3s;
  }
  .board tbody tr:nth-of-type(even) {
    background-color: #333333;
  }
  .board tbody tr:nth-child(1) {
    background-color: #ffb300;
    color: black;
  }
  .board tbody tr:nth-child(2) {
    background-color: #c0c0c0;
    color: black;
  }
  .board tbody tr:nth-child(3) {
    background-color: #cd7f32;
    color: white;
  }
  .board tbody tr:last-of-type {
    border-bottom: 5px solid #f1cc0c;
  }
  .board tbody tr:hover {
    color: #f1cc0c;
    background-color: #5c5c5c;
  }
  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #dots {
    margin-top: -60px;
    margin-bottom: -35px;
    font-size: 60pt;
    color: #f1cc0c;
    opacity: 0.5;
  }
</style>

<div id="container">
  <h1>TripleAJ Leaderboard</h1>

  <table class="board">
    <thead>
      <td>Rank</td>
      <td>Name</td>
      <td>Tokens</td>
    </thead>
    <tbody id='tbody'></tbody>
  </table>
</div>
</body>

<script>
var tbody = document.getElementById('tbody');
let unsortedDB = null;
let sortedDB = null;
function tableFill(db) {
  let len = db.length
  for (var i = 0; i < len; i++) {
    // save relevant info from db
    var rank = i+1
    var name = db[i].name
    var tokens = db[i].tokens
    // Make a new row
    let tr = document.createElement('tr')
    tbody.appendChild(tr)
    // Make three entries for the row
    let tdR = document.createElement('td')
    let tdN = document.createElement('td')
    let tdT = document.createElement('td')
    // Make text node for each entry (contains data from db)
    let rankNode = document.createTextNode(parseFloat(rank))
    let nameNode = document.createTextNode(name)
    let tokensNode = document.createTextNode(parseFloat(tokens))
    // Make text nodes visible in row entries
    tdR.appendChild(rankNode)
    tdN.appendChild(nameNode)
    tdT.appendChild(tokensNode)
    // Make row entries visible in the row
    tr.appendChild(tdR)
    tr.appendChild(tdN)
    tr.appendChild(tdT)
  }
}
async function sort() {
  const unsorted = await fetch('https://ajarcade.duckdns.org/api/players/')
    .then(res => {return res.json()})
    .then(data => {unsortedDB = data})
    .catch(error => console.log('ERROR'))
  // Check to see if fetch worked
  console.log(unsortedDB)
  // sorts the db by token amount
  sortedDB = unsortedDB.sort((a, b) => {
    if (a.tokens > b.tokens) {
      return -1;
    }
  });
  // Log the sorted db
  console.log(sortedDB)
  // fill the table with sorted db info
  tableFill(sortedDB)
}

</script>
</html>