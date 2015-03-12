function View() {

  this.placePiece = function(player,row,column) {
    cell = $( 'tr:nth-child('+row+') td:nth-child('+column+')' );
    if (player == 1) {
      $(cell).addClass('red');
    } else {
      $(cell).addClass('yellow');
    }
  }

//  this.displayWhosTurn

//  this.reload/clearScreen (on new game (new game button for html))

//  this.displayWinLossDraw

}
