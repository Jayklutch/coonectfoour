function View() {

  this.placePiece = function(player,row,column) {
    cell = $( 'tr:nth-child('+row+') td:nth-child('+column+')' );
    if (player == 1) {
      $(cell).addClass('p1');
    } else {
      $(cell).addClass('p2');
    }
  }
}
