window.onload = function() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img=document.getElementById("spaceCraft");
    var img2=document.getElementById("meteor");
    ctx.scale(0.05,0.05)
    ctx.drawImage(img,500,500);
    ctx.drawImage(img2,10,10);
}
