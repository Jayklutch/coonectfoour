function Game(players) {
  this.players = players;
  this.board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

}

Game.prototype.drop = function (colNum, playerNum) {
  for (var i = 5; i >= 0; i--) {
    if (this.board[i][colNum] === 0) {
      this.board[i][colNum] = playerNum;
      return i + 1;
    }
  }
  return 0;
};

Game.prototype.checkWinner = function () {
  for (var i = 0; i < this.players.length; i++) {
    if (this.players[i].has_won === true) {
      return true;
    }
  }
  return false;
};

Game.prototype.check = function (player) {
  // check rows
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 7; j++) {
      var cellValue = board[j][i];
      updateScore(cellValue, player.number);
    }
  }
  // check cols
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 6; j++) {
      var cellValue = board[j][i];
      updateScore(cellValue, player);
    }
  }
};

Game.prototype.updateScore = function (cellValue, player) {
  if (cellValue === player.number) {
    player.score++;
  } else {
    player.score = 0;
  }
  player.checkWin();
};