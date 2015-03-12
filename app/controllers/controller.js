function Controller() {
  this.view = new View();
  this.player1 = new Player('GreenLantern', 1);
  this.player2 = new Player('Hulk', 2);
  this.game = new Game([this.player1, this.player2]);
  this.turn = 1;
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
  if (this.turn === 1) {
    player = this.player1;
  } else {
    player = this.player2;
  }
  var row = this.game.drop(colNum, player.number);
  // do something with row var
  this.game.check(player);
  this.turn = 3 - this.turn;
};