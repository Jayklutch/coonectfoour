function Model(){

  function player(name,number){
    this.name = name;
    this.number = number;
    this.has_won = false;
  } //player

  player1 = new player('GreenLantern', 1);
  player2 = new player('Hulk', 2);

  var board = [
    [0,0,0,0,0,0,0],
    [0,0,2,2,2,2,0],
    [0,0,1,0,0,0,0],
    [0,0,1,0,0,0,0],
    [0,0,1,0,0,0,0],
    [0,0,1,0,0,0,0]
  ];

  this.drop=function(num, player){
    for (var i = 5; i >= 0; i--)
    {
      if (board[i][num] === 0)
      {
        board[i][num] = player;
      var update = i+1
      return update
        break;
      }
    }
  }

  function check(player){
    var RowCount = 0
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 7; j++) {
        if (board[i][j] === player){
          RowCount++;
          console.log("row count",RowCount);
        }
          else {
            RowCount = 0;
          }
        if(RowCount === 4){
          if(player===1){player1.has_won = true;}
          else {player2.has_won = true;}
      }
    }
      console.log(player1.has_won, player2.has_won);
    }

    var ColCount = 0
    for (var j = 0; j < 7; j++) {
      for (var i = 0; i < 6; i++) {
        if (board[i][j] === player){
          ColCount++;
          console.log("coloumn count",ColCount);
        }
          else {
            ColCount = 0;
          }
        if(ColCount === 4){
          if(player===1){player1.has_won = true;}
          else {player2.has_won = true;}
      }
    }
      console.log(player1.has_won, player2.has_won);
    }






  } //check
check(1);
check(2);

x = new Model();
// x.drop(1,2)
}
