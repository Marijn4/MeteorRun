var spaceCraftX = 130,
	meteorX = spaceCraftX - 10,
	meteorX1 = spaceCraftX + 10,
	meteorY = 0,
	onceAlert = true,
	score = 0,
	difficulty = 2000,
	difficulty1 = 1;

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
				meteorX = spaceCraftX;
				score += 1;
				document.getElementById('score').innerHTML = 'SCORE: ' + score;
				if (difficulty > 125) {
					difficulty = difficulty / 2;
					difficulty1 += 1;
				document.getElementById('difficulty').innerHTML = 'DIFFICULTY: ' + difficulty1;
				}
			}
		},difficulty)
	}
},1000)
	
}

function control() {
	if (meteorX + 20 > spaceCraftX && meteorX - 20 < spaceCraftX && meteorY + 5 > 130) {
		clearInterval(interval);
		meteorY = 1;
		meteorX = spaceCraftX;
		onceAlert = true
		if (difficulty1 > 1) {
			difficulty1 = difficulty1 - 1;
			document.getElementById('difficulty').innerHTML = 'DIFFICULTY: ' + difficulty1;
		}
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
