let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function desenhar_quadrado(lW,x,y,w,h,color_fill){
    ctx.beginPath();
    ctx.lineWidth = lW;
    ctx.fillStyle = color_fill;
    ctx.fillRect(x,y,w,h);
    ctx.closePath();
    
}


function linhas(moveTo_x,moveTo_y,lineTo_x,lineTo_y,strokeStyle,Width){
    ctx.beginPath();
    ctx.lineWidth = Width;
    ctx.strokeStyle = strokeStyle;
    ctx.moveTo(moveTo_x,moveTo_y);
    ctx.lineTo(lineTo_x,lineTo_y);
    ctx.stroke();
    ctx.closePath;
};
//x,y,raio,anguloinicial,angulofinal
function arcos(stroke,x,y,raio,angulo_inicial,angulo_final){
    ctx.beginPath();
    ctx.strokeStyle = stroke;
    ctx.arc(x,y,raio,angulo_inicial,angulo_final);
    ctx.stroke();
    ctx.closePath();

}






arcos("green",150,150,70,1 * Math.PI,2 * Math.PI);
arcos("green",130,150,75,1 * Math.PI,1.31 * Math.PI);
arcos("green",170,150,75,1.68 * Math.PI,2 * Math.PI);

linhas(0,0,150,150,"blue",2);
linhas(300,0,150,150,"red",2);
linhas(0,150,300,150,"green",2);
desenhar_quadrado(3,0,0,60,60,"blue");
desenhar_quadrado(3,240,0,60,60,"red");