let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
//bloco amarelo:
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "yellow";
ctx.fillRect(0,460,40,40);//  #coordenada x;cordenada y;largura;altura.
ctx.closePath();

//bloco verde:
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "green";
ctx.fillRect(460,460,40,40);
ctx.closePath();

//linha central :
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(0,250);
ctx.lineTo(500,250);
ctx.stroke();
ctx.closePath();

//semi circuferencia:
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.arc(250,251,80,1*Math.PI,0*Math.PI,true);//x,y,raio,anguloinicial,angulofinal
ctx.stroke();
ctx.closePath();

//farei a linha agora:
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.moveTo(0,0);
ctx.lineTo(500,500);
ctx.stroke();
ctx.closePath();

//linha azul:
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "blue";
ctx.moveTo(500,0);
ctx.lineTo(0,500);
ctx.stroke();
ctx.closePath();

// bloco vermelho
ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(0,0,40,40);
ctx.closePath();

//bloco azul

ctx.beginPath();
ctx.fillStyle = "blue";
ctx.fillRect(460,0,40,40);
ctx.closePath();

//colocarei o texto aqui

ctx.beginPath();
ctx.font = "35px Arial";
ctx.fillText("Desenvolvimento Web",75,75);
ctx.closePath();

//colocarei as bolinhas amarelas:
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "yellow";
ctx.arc(80,165,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "yellow";
ctx.arc(410,165,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();



