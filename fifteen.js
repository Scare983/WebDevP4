"use strict";
var puzzlePiece;
window.onload = function() { //do all this on load
	var pa = document.getElementById("puzzlearea");
	puzzlePiece = pa.getElementsByTagName("div");// get all divs children within puzzleArea.
	for(var i=0;i< puzzlePiece.length;i++) {//we have 16 divs (0-15), and want the shape to be 4x4 with a blank.
		puzzlePiece[i].className = "puzzlepiece"; // make it the css name puzzlepiece.
	//create format for the pieces here
	puzzlePiece[i].style.left =(i % 4 * 100)+"px";// determiens distance from left picture should be, 100 200 300 400 pixels
	puzzlePiece[i].style.top = (parseInt(i/4)) * 100 + "px";						//determines how far down from top of screen puzzlepiece is, i mod 4 makes sure that our rows are 4x4.




	}


}//end initial load.
