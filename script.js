var spaceCraftX = 130,
	meteorX = Math.random() * 260,
	meteorY = 0,
	onceAlert = true,
	score = 0;

window.onload = function() {
	setInterval( function() {
		if (meteorY == 0) {
    	var c=document.getElementById("myCanvas");
    	var ctx=c.getContext("2d");
		var img1 = document.getElementById('img1');
		var img2 = document.getElementById('img2');
		ctx.drawImage(img1,meteorX,0, 30, 10);
		ctx.drawImage(img2,130,130,30,12);
		window.interval = setInterval( function() {
			meteorY += 5;
			control();
    		var c=document.getElementById("myCanvas");
    		var ctx=c.getContext("2d");
			ctx.clearRect(0, 0, c.width, c.height);
			ctx.drawImage(img1,meteorX,meteorY, 30, 10);
			ctx.drawImage(img2,spaceCraftX,130,30,12);	
			if (meteorY >= 140) {
				clearInterval(interval);
				meteorY = 0;
   				var c=document.getElementById("myCanvas");
   				var ctx=c.getContext("2d");
				ctx.clearRect(0, 0, c.width, c.height);
		 		ctx.drawImage(img1,meteorX,meteorY, 30, 10);
				ctx.drawImage(img2,spaceCraftX,130,30,12);
				meteorX = Math.random() * 260;
				score += 1;
				document.getElementById('score').innerHTML = 'SCORE: ' + score;
			}
		},1000)
	}
},1000)
	
}

function control() {
	if (meteorX + 20 > spaceCraftX && meteorX - 20 < spaceCraftX && meteorY + 5 > 130) {
		clearInterval(interval);
		meteorY = 1;
		meteorX = Math.random() * 260;
		onceAlert = true
		if (onceAlert) {
		score = score - 1;
		document.getElementById('score').innerHTML = 'SCORE: ' + score;
		onceAlert = false;
		}
	}
}

function moveLeft() {
	if (spaceCraftX > 0) {
		spaceCraftX -= 10;
	    var c=document.getElementById("myCanvas");
	    var ctx=c.getContext("2d");
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(img1,meteorX,meteorY, 30, 10);
		ctx.drawImage(img2,spaceCraftX,130,30,12);
	}
};

function moveRight() {
	if (spaceCraftX < 270) {
		spaceCraftX += 10;
	    var c=document.getElementById("myCanvas");
	    var ctx=c.getContext("2d");
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(img1,meteorX,meteorY, 30, 10);
		ctx.drawImage(img2,spaceCraftX,130,30,12);
	}
};
