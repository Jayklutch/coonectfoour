function Model(){

  var board = [
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]
              ];

  this.drop function(num, player){
    for (var i = 5; i >= 0; i--){
      if (board[i][num] === 0){
        board[i][num] = player;
        return i+1;
      }
    }
    return 0
  }

  Player.prototype.check function(player){
    for (var i = 0; i < 6; i++){
      for (var j = 0; j < 7; j++){
        var match = board[i][j];
        matches(match, player);
      }
    }
    for (var i = 0; i < 7; i++){
      for (var j = 0; j < 6; j++){
        var match = board[j][i];
          matches(match, player);
      }
    }
  }

  var count = 0
    function matches(match, player){
      if (match === player){
        count++;
      } else {
        count = 0;
      }
      //If the count has reached 4 someone has won!
      if(count === 4){
        if(player === 1){
          player1.has_won = true;
        } else {
          player2.has_won = true;
        }
      }
    }

    function winner(){
      if (player1.has_won === true){return player1.name+" has won!"};
      if (player2.has_won === true){return player2.name+" has won!"};
    }
}
