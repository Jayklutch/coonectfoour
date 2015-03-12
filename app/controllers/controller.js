function Controller() {
	var view = new View();
	var model = new Model();

	//player 1 or 2
	var currentPlayer = 1;

	//colClick inputs router col selected
	this.columnClicked = function(colNum) {
		var row = model.drop(colNum, currentPlayer);
		view.placePiece(currentPlayer, row, colNum);



		currentPlayer = 3 - currentPlayer;
		view.displayActivePlayer(currentPlayer);

	}

}