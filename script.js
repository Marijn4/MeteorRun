window.onload = function() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img=document.getElementById("spaceCraft");
    var img2=document.getElementById("meteor");
    ctx.drawImage(img,10,10);
    ctx.drawImage(img2,10,10);
}