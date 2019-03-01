"use strict";
//global variables
var puzzlePieces;//becomes array of divs 0-15
var cordOfBlank;//keep track of pixel top and left of blank div to compare to
//end global

window.onload = function() { //do all this on load
	var pa = document.getElementById("puzzlearea");
	puzzlePieces = pa.getElementsByTagName("div");// get all divs children within puzzleArea.
	for(var i=0;i< puzzlePieces.length;i++) {//we have 16 divs (0-15), and want the shape to be 4x4 with a blank.
		puzzlePiece[i].className = "puzzlepiece"; // make it the css name puzzlepiece.
		//create format for the pieces here
		puzzlePieces[i].style.left =(i % 4 * 100)+"px";// determiens distance from left picture should be, 100 200 300 400 pixels
		puzzlePieces[i].style.top = (Math.floor(i/4)) * 100 + "px";						//determines how far down from top of screen puzzlepiece is, i mod 4 makes sure that our rows are 4x4.




	}

}//end initial load.
function didHeSheTheyItWin(){//return bool value ensuring all 15 pieces are matched to correct spot.
	//use global variable puzzlePieces to check board state.
}
function won() {//return alert or something to show that the player won.

}
function revertPiece(puzzlePiece) { //returns border settings of piece to normal.  May not need this.

}
function shuffle() { //returns mixed up board, should use swap.  This is activated onClick of shuffle item that needs to be initialized by finding the ID in html

}
function swap(puzzlePiece) { //swap with empty space.
	updateBlankCord(x, y );//should be used whenever a swap. pass through the  x y coordinates (Top/left) of
}

function isNextToBlank(puzzlePiece) {//checks the box left, right, up, down to see if it can move.  If can, return true.

}
function setBlankCord() {//has to be calculated iterating or keeping track of movements

}
function updateBlankCord(x, y) {
	didHeSheTheyItWin();//on update of blank coordinate, check if there is winner and won();

}




