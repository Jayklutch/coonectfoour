function Controller() {
  this.view = new View();
  this.player1 = new Player('GreenLantern', 1);
  this.player2 = new Player('Hulk', 2);
  this.game = new Game([this.player1, this.player2]);
  this.currentPlayer = this.player1;
}

Controller.prototype.bindEvents = function () {
  var self = this;
  $('body').on('click', 'td', function () {
    // this is a html body object
    self.columnClicked($(this).attr("class").substring(0, 1));
  });
};

Controller.prototype.columnClicked = function (colNum) {
  // move player stuff when turn = 1
  var row = this.game.drop(colNum-1, this.currentPlayer.number);
  this.view.placePiece(this.currentPlayer.number, row, colNum);
  this.game.check(this.currentPlayer);
  if (this.game.checkWinner()) { this.view.displayWin(this.currentPlayer.name);}
  else {
    //this.turn = 3 - this.turn;
      if (this.currentPlayer.number === this.player1.number) {
        this.currentPlayer = this.player2;
      } else {
        this.currentPlayer = this.player1;
      }
    this.view.displayActivePlayer(this.currentPlayer.name);
  }
};
