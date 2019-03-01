"use strict";
//global variables
var puzzlePieces;//becomes array of divs 0-15
var cordOfBlank = {x:0, y:0};//keep track of pixel top and left of blank div to compare to

//end global

	window.onload = function() { //do all this on load

	var pa = document.getElementById("puzzlearea");
	puzzlePieces = pa.getElementsByTagName("div");// get all divs children within puzzleArea.
	//can setBlankCord now because puzzlePieces has been populated
	for(var i=0;i< puzzlePieces.length;i++) {//we have 16 divs (0-15), and want the shape to be 4x4 with a blank.
		puzzlePieces[i].className = "puzzlepiece"; // make it the css name puzzlepiece.
		//create format for the pieces here
		puzzlePieces[i].style.left =(i % 4 * 100)+"px";// determiens distance from left picture should be, 100 200 300 400 pixels
		puzzlePieces[i].style.top = (Math.floor(i/4)) * 100 + "px";						//determines how far down from top of screen puzzlepiece is, i mod 4 makes sure that our rows are 4x4.
	//	puzzlePieces[i].onmouseover = isNextToBlank(puzzlePieces[i]);



	}
		setBlankCord();
		alert("x cord: "  + cordOfBlank.x + "y cord of blank space: " + cordOfBlank.y); //just checking if setBlank works.  Need to test on shuffle.

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
	var x ;
	var y;
	updateBlankCord(x, y );//should be used whenever a swap. pass through the  x y coordinates (Top/left) of
}

function isNextToBlank(puzzlePiece) {//checks the box left, right, up, down to see if it can move.  If can, return true.

}
function setBlankCord() {//has to be calculated iterating or keeping track of movements
	var length = puzzlePieces.length;
	var flag = false;
	for(var i=0; i < length; i+=4) {
		var rowCalculate = 0;
		for(var j =i; j < i+4; j++) {
			if(j==15) {
				flag = true;
				cordOfBlank.x = 300;
				cordOfBlank.y = parseInt(puzzlePieces[i].style.top);
				break;
			}
			if (parseInt(puzzlePieces[j].style.left) == 0) {
				rowCalculate+= 1;
			}
			else {
				rowCalculate += parseInt(puzzlePieces[j].style.left);
			}
		}
		if(flag==true) {
			break;
		}
		if(rowCalculate != 601) {//600pxls should be total of unless there is blank space. 601 is how we can make sure first column is being used

			for(var k=i; k<4;k++) {
				var num = k % 4 * 100;
				if(puzzlePieces[k].style.left != num) {
					cordOfBlank.x = num;
				}
			}
			cordOfBlank.y = parseInt(puzzlePieces[i].style.top);

			break;
		}
	}

}
function updateBlankCord(x, y) {
	didHeSheTheyItWin();//on update of blank coordinate, check if there is winner and won();

}




