function Model(){

<<<<<<< HEAD
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
=======
    function Player(name,number) {
    this.name = name;
    this.number = number;
    this.has_won = false;
    } //player

    player1 = new Player('GreenLantern', 1);
    player2 = new Player('Hulk', 2);


      var board = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,2,0,0,0,0],
        [0,0,2,0,0,0,0],
        [0,0,2,0,0,0,0],
        [0,0,1,1,1,1,0]
      ];

    function drop(num, player){
        for (var i = 5; i >= 0; i--)
        {
            if (board[i][num] === 0)
            {
              board[i][num] = player;
              break;
            }
        }
    }

    function check(player){
      //Match for Row
        for (var i = 0; i < 6; i++) { 
            for (var j = 0; j < 7; j++) {
              var match = board[i][j];
              matches(match, player);
            }
>>>>>>> 57334d3e4ca8741e9881c41e1f1b6b4f5c43246a
        }
      //Match for Column
        for (var i = 0; i < 7; i++) { 
            for (var j = 0; j < 6; j++) {
              var match = board[j][i];
              matches(match, player);
            }
        }    
    }

<<<<<<< HEAD
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



=======
    var count = 0
    function matches(match, player) {
      //Match cell against player number
        if (match === player) {
            count++;
        } else {
            count = 0;
        }
      //If the count has reached 4 someone has won!
        if(count === 4) {
            if(player === 1){player1.has_won = true;}
            else {player2.has_won = true;}
        }
    }
>>>>>>> 57334d3e4ca8741e9881c41e1f1b6b4f5c43246a

    function winner(){
      if (player1.has_won === true){return player1.name+" has won!"};
      if (player2.has_won === true){return player2.name+" has won!"};
    }


drop(1,2);
console.log(board);
check(1);
check(2);
<<<<<<< HEAD

x = new Model();
// x.drop(1,2)
}
=======
console.log(winner());

} //model

x = new Model();
>>>>>>> 57334d3e4ca8741e9881c41e1f1b6b4f5c43246a
