window.onload = function() {
	var canvas =document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	var img=document.getElementById("spaceCraft");
	var img2=document.getElementById("meteor");
    context.drawImage(img,0, 140, 18, 10);
    context.drawImage(img2,0,0, 40, 15);
    document.onkeydown = checkKey;

    function leftArrowPressed() {
    	var element = document.getElementById("spaceCraft");
    	element.style.left = parseInt(element.style.left) - 5 + 'px';
    }

    function rightArrowPressed() {
    	var element = document.getElementById("spaceCraft");
    	element.style.left = parseInt(element.style.left) + 5 + 'px';

    }
}

