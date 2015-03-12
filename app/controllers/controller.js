function Controller() {

  var view = new View();
  var model = new Model();
  var turn = 0

  this.play = function() {

  this.columnClicked = function(num){
    turn ++
    if (turn%2==0){player=1}
    else{player=2};

    row = model.drop(num, player)
    view.displayPiece(player, row, num)
  }
}
