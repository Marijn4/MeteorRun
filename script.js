window.onload = function() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img=document.getElementById("spaceCraft");
    ctx.drawImage(img,10,10);
}