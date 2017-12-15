window.onload = function() {
	document.getElementById("leftbut").onclick = function() {moveLeft()};
	document.getElementById("rightbut").onclick = function() {moveRight()};
	function moveLeft() {
		alert("left");
	};

	function moveRight() {
		alert("right");
	};
};