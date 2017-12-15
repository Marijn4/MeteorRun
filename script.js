window.onload = function() {
	document.getElementById("leftbut").onclick = function() {moveLeft()};
	document.getElementById("rightbut").onclick = function() {moveRight()};
	function moveLeft() {
		console.log("left");
	};

	function moveRight() {
		console.log("right");
	};
};