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
  };

  this.displayActivePlayer = function(player){
    $('div#statusBanner').text(player+"'s turn!");
    // if (player == 1){
    //   $('div#statusBanner').text("RED's Turn");
    // } else {
    //   $('div#statusBanner').text("YELLOW's Turn");
    // }
  };

  this.displayWin = function(player){
    $('div#statusBanner').text(player+" has WON!");
  //   if (player == 1){
  //     $('div#statusBanner').text("RED won!");
  //   } else {
  //     $('div#statusBanner').text("YELLOW won!");
  //   }
   };

  this.displayDraw = function(){
    $('div#statusBanner').text("It's a draw!");
  };

}
