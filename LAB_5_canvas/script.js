let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let canvas2 = document.getElementById("canvas_2");
let ctx_2 = canvas2.getContext("2d");

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
function arcos(stroke,x,y,raio,angulo_inicial,angulo_final,boolean){
    ctx.beginPath();
    ctx.strokeStyle = stroke;
    ctx.arc(x,y,raio,angulo_inicial,angulo_final,boolean);
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.closePath();

}

function arcos_com_cor(fill,stroke,x,y,raio,angulo_inicial,angulo_final,largura){
    
    ctx.beginPath();
    ctx.lineWidth = largura;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.arc(x,y,raio,angulo_inicial,angulo_final);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

}
function texto(escreva){
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillText(escreva,115,50);
    ctx.closePath();
}

// segundo canvas
function desenhar_quadrado_2(x,y,w,h,color_fill){
    ctx_2.beginPath();
    ctx_2.fillStyle = color_fill;
    ctx_2.fillRect(x,y,w,h);
    ctx_2.closePath();
    
}


function linhas_2(moveTo_x,moveTo_y,lineTo_x,lineTo_y,linex,liney,x,y,fill){
    ctx_2.beginPath();
    ctx_2.fillStyle = fill;
    ctx_2.moveTo(moveTo_x,moveTo_y);
    ctx_2.lineTo(lineTo_x,lineTo_y);
    ctx_2.lineTo(linex,liney)
    ctx_2.lineTo(linex,liney);
    ctx.lineTo(x,y);
    ctx_2.fill();
    ctx_2.closePath();
};
//x,y,raio,anguloinicial,angulofinal
function arcos_2(stroke,x,y,raio,angulo_inicial,angulo_final,boolean){
    ctx_2.beginPath();
    ctx_2.strokeStyle = stroke;
    ctx_2.arc(x,y,raio,angulo_inicial,angulo_final,boolean);
    ctx_2.stroke();
    ctx_2.lineWidth = 2;
    ctx_2.closePath();

}

function arcos_com_cor_2(fill,x,y,raio,angulo_inicial,angulo_final){
    
    ctx_2.beginPath();
    ctx_2.fillStyle = fill;
    ctx_2.arc(x,y,raio,angulo_inicial,angulo_final);
    ctx_2.fill();
    ctx_2.closePath();

}
function texto_2(escreva){
    ctx_2.beginPath();
    ctx_2.font = "20px Arial";
    ctx_2.fillText(escreva,115,50);
    ctx_2.closePath();
}




arcos("green",150,150,70,1 * Math.PI,2 * Math.PI);
arcos("green",130,150,75,1 * Math.PI,1.31 * Math.PI);
arcos("green",170,150,75,1.68 * Math.PI,2 * Math.PI);
arcos("green",150,300,85,1 * Math.PI,1.5 * Math.PI);
arcos("green",150,290,65,0.5* Math.PI,1.5 * Math.PI,true)
arcos_com_cor("aqua","green",150,300,50,1 * Math.PI,2 * Math.PI,2);
arcos_com_cor("aqua","blue",150,110,15,0 * Math.PI,2 * Math.PI,5)
arcos_com_cor("yellow","green",60,220,15,0 * Math.PI,2 * Math.PI,5)
arcos_com_cor("yellow","green",240,220,15,0 * Math.PI,2 * Math.PI,5)

desenhar_quadrado(3,0,120,30,30,"aqua")
desenhar_quadrado(3,0,150,30,30,"aqua")
desenhar_quadrado(3,270,135,30,30,"aqua")
desenhar_quadrado(3,100,150,50,50,"red")

linhas(0,0,150,150,"blue",2);
linhas(300,0,150,150,"red",2);
linhas(0,150,300,150,"green",2);
linhas(150,250,150,150,"gray",3)
desenhar_quadrado(3,0,0,60,60,"blue");
desenhar_quadrado(3,240,0,60,60,"red");
desenhar_quadrado(3,0,240,30,30,"yellow");
desenhar_quadrado(3,0,270,30,30,"yellow");
desenhar_quadrado(3,30,270,30,30,"yellow");

desenhar_quadrado(3,270,240,30,30,"black");
desenhar_quadrado(3,270,270,30,30,"black");
desenhar_quadrado(3,240,270,30,30,"black");

texto("Canvas");

//agora é o segundo canvas

arcos_com_cor_2("yellow",220,75,35,0 * Math.PI,2 * Math.PI);
desenhar_quadrado_2(0,220,300,80,"gray")
desenhar_quadrado_2(255,230,20,40,"brown");
arcos_com_cor_2("darkgreen",265,210,25,0 * Math.PI,2 * Math.PI);
desenhar_quadrado_2(120,140,80,80,"saddlebrown");//casa
desenhar_quadrado_2(130,160,25,25,"deepskyblue");
desenhar_quadrado_2(165,160,25,25,"deepskyblue");
desenhar_quadrado_2(152,185,15,35,"#3d2b1f");
linhas_2(120,140,160,100,200,140,120,140,"brown");
desenhar_quadrado_2(50,180,20,40,"brown");
arcos_com_cor_2("darkgreen",60,160,25,0 * Math.PI,2 * Math.PI);
desenhar_quadrado_2(0,225,45,80,"deepskyblue");
desenhar_quadrado_2(45,260,90,40,"deepskyblue");
arcos_com_cor_2("deepskyblue",135,300,40,1.5 * Math.PI,2.5* Math.PI)
arcos_com_cor_2("deepskyblue",0,220,45,1.1* Math.PI,2.5 * Math.PI)