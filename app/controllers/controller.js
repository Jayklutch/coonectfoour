function Controller() {
  this.view = new View();
  this.player1 = new Player('GreenLantern', 1);
  this.player2 = new Player('Hulk', 2);
  this.game = new Game([this.player1, this.player2]);
  this.player = this.player1;
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
  var row = this.game.drop(colNum, player.number);
  this.view.placePiece(player, row, colNum);
  this.game.check(player);
  if (this.game.checkWinner()) { this.view.displayWin(player.name);}
  else {
    //this.turn = 3 - this.turn;
      if (player.name === this.player1.name) {
        player = this.player2;
      } else {
        player = this.player1;
      }
    this.view.displayActivePlayer(player.name);
  }
};
