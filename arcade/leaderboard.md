{% include arcadeSubmenu.html %}

<html>
<title>Leaderboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<body>

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
    margin-top: 40px;
    border: 2px solid #f1cc0c;
    height: 50%;
  }
  .board tr {
    padding-top: 15px;
    border: none;
    height: 50px;
  }
  #container tr:nth-child(even){background-color: #373801;} {
    padding-top: 12px;
    padding-bottom: 12px;
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
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Tokens</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Azeem Khan</td>
      <td>69</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Ahad Biabani</td>
      <td>63</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Josh Williams</td>
      <td>61</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Akshat Parikh</td>
      <td>55</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Samit Poojary</td>
      <td>52</td>
    </tr>
  </table>
  <p id="dots">. . .</p>
  <table class="board">
    <tr>
      <td>21</td>
      <td>Willy Wonka</td>
      <td>23</td>
    </tr>
  </table>
</div>
</body>
</html>