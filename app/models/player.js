function Player(name, number) {
  this.name = name;
  this.number = number;
  this.has_won = false;
  this.score = 0;
}

Player.prototype.checkWin = function (){
  //If the count has reached 4 someone has won!
  if(this.score === 4){
    this.has_won = true;
  }
};
