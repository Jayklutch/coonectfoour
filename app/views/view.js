function View() {

  this.placePiece = function(player,row,column) {
    cell = $( 'tr:nth-child('+row+') td:nth-child('+column+')' );
    if (player == 1) {
      $(cell).removeClass('yellow');
      $(cell).addClass('red');
    } else {
      $(cell).removeClass('red');
      $(cell).addClass('yellow');
    }
  }

//  this.displayWhosTurn

//  this.reload/clearScreen (on new game (new game button for html))

//  this.displayWinLossDraw

}
