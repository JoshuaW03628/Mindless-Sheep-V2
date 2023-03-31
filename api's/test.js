let arcadeToken = 0;

function addToken() {
  arcadeToken++;
}

function removeToken() {
  if (arcadeToken > 0) {
    arcadeToken--;
  }
}

function resetTokens() {
  arcadeToken = 0;
}

console.log(arcadeToken); // 0
addToken();
addToken();
addToken();

console.log(arcadeToken); // 3

removeToken();

console.log(arcadeToken); // 2

resetTokens();

console.log(arcadeToken); // 0
function scorePoint(player) {
    if (player === "player") {
      playerScore++;
      addToken(); // Call the addToken() method when the player scores a point
    } else {
      computerScore++;
      removeToken(); // Call the removeToken() method when the computer scores a point
    }
    
    if (playerScore === winningScore || computerScore === winningScore) {
      gameOver = true;
    }
  }