function View() {

  this.placePiece = function(player,row,column) {
    cell = $( "table:nth-child(row):nth-child(column)" );
    console.log($(cell));
  }
}
