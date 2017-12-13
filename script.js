window.onload = function() {
    var canvas =document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var img=document.getElementById("spaceCraft");
    var img2=document.getElementById("meteor");
    context.drawImage(img,0, 140, 18, 10);
    context.drawImage(img2,0,0, 40, 15);
}
