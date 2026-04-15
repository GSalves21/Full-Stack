let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function desenhar_quadrado(lW,x,y,w,h,,color_fill){
    ctx.lineWidth = lW;
    ctx.fillStyle = color_fill;
    ctx.fillRect(x,y,w,h);
    
}