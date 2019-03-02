"use strict";
//global variables
var puzzlePieces = new Array();//becomes array of divs 0-15
var cordOfBlank = {x:0, y:0};//keep track of pixel top and left of blank div to compare to

//end global

	window.onload = function() { //do all this on load
		var pa = document.getElementById("puzzlearea");
		setPuzzlePieces(pa);


	for(var i=0;i< puzzlePieces.length;i++) {//we have 16 divs (0-15), and want the shape to be 4x4 with a blank.
		puzzlePieces[i].className = "puzzlepiece"; // make it the css name puzzlepiece.
		//create format for the pieces here
		puzzlePieces[i].style.left =(i % 4 * 100)+"px";// determiens distance from left picture should be, 100 200 300 400 pixels
		puzzlePieces[i].style.top = (Math.floor(i/4)) * 100 + "px";						//determines how far down from top of screen puzzlepiece is, i mod 4 makes sure that our rows are 4x4.
	//	puzzlePieces[i].onmouseover = isNextToBlank(puzzlePieces[i]);
		puzzlePieces[i].style.backgroundPositionX = (((i%4  )) *  -100) + "px"; //negative because moving right, not left.
		puzzlePieces[i].style.backgroundPositionY = ((Math.floor(i/4 )) * -100) + "px";

	}
		setBlankCord();//can only do after populated entire board.
		var shuffleBtn = document.getElementById("shufflebutton");
		//for some reason don't put () for the shuffle method...

		shuffleBtn.onclick = function() {shuffle();};
	for(var i=0;i< puzzlePieces.length;i++){ //iterate after board population.


		puzzlePieces[i].onmouseover = function() {
			if (isValidMove(this)){ //so just figuring this out, but "this" on mouse event selects the div that has the event on it.
				this.className = "puzzlepiece movablepiece";
			}
		};
		puzzlePieces[i].onmouseout = function() { // need to revert class on leave so that each div doesn't become red on hover.
			this.className = "puzzlepiece";
		}
		puzzlePieces[i].onclick = function() {
			if(isValidMove(this)) {
				swap(this);
				didHeSheTheyItWin();
			}
		};




	}
		//alert("x cord: "  + cordOfBlank.x + "y cord of blank space: " + cordOfBlank.y); //just checking if setBlank works.  Need to test on shuffle.

};//end initial load.
function didHeSheTheyItWin(){//return bool value ensuring all 15 pieces are matched to correct spot.
	var isFinished = true;
	for(var i = 0; i < puzzlePieces.length; i++) {
		var left = parseInt(puzzlePieces[i].style.left);
		var top = parseInt(puzzlePieces[i].style.left);
		//compare to original placement.
			if(left !=i %4 * 100  && top != i / 4 * 100 ) {
				isFinished = false;
			}
		}

if(isFinished) {
		won();
}

		//use global variable puzzlePieces to check board state.
}
function won() {//return alert or something to show that the player won.
	alert("You WON!  please shuffle.");
}
function shuffle() { //returns mixed up board, should use swap.  This is activated onClick of shuffle item that needs to be initialized by finding the ID in html

		for (var i =0; i < 1000; i++) {
			var arrays = new Array();
			for(var j =0; j < puzzlePieces.length; j++) {
				if(isValidMove(puzzlePieces[j])) {
					arrays.push(puzzlePieces[j]);
		}

}

			var rand = Math.floor((Math.random() * Math.floor(arrays.length)));

			swap(arrays[rand]);
	}
}


//kevin Linnane
function swap(puzzlePiece) { //swap with empty space.v
		var temp = [puzzlePiece.style.left, puzzlePiece.style.top];
		puzzlePiece.style.left = cordOfBlank.x + "px";
		puzzlePiece.style.top = cordOfBlank.y + "px";
		updateBlankCord(temp[0], temp[1] );//should be used whenever a swap. pass through the  x y coordinates (Top/left) of
}

function isValidMove(puzzlePiece) {//checks the box left, right, up, down to see if it can move.  If can, return true.
		var left = parseInt(puzzlePiece.style.left);
		var top = parseInt(puzzlePiece.style.top);
	//fix this later
	if((left - 100 == cordOfBlank.x &&cordOfBlank.y == top)  || (left + 100 == cordOfBlank.x  && cordOfBlank.y == top)|| (top + 100 == cordOfBlank.y && left == cordOfBlank.x)|| (top - 100 == cordOfBlank.y && left == cordOfBlank.x) ) { //check x's and y's to blankSpace
		return true;
	}
	else {
		return false;
	}

}
//Kevin Linnane
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
//Kevin Linnane
function updateBlankCord(x, y) {
		cordOfBlank.x = parseInt(x);//need to parse int because temp[[0] contains 'px'
		cordOfBlank.y = parseInt(y);
		//didHeSheTheyItWin();//on update of blank coordinate, check if there is winner and won();
}

function setPuzzlePieces(pa)
{
	puzzlePieces = pa.getElementsByTagName("div");// get all divs children within puzzleArea.

}
