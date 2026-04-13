let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle ="green";
ctx.fillRect(0,450,50,50);
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle ="green";
ctx.fillRect(450,450,50,50);
ctx.closePath()

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(500,500);
ctx.strokeStyle="red";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(0,500);
ctx.lineTo(500,0);
ctx.strokeStyle="blue";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle ="red";
ctx.fillRect(0,0,50,50);
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle ="blue";
ctx.fillRect(450,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle="black";
ctx.fillStyle = "black";
ctx.font ="30px Arial";
ctx.strokeText("Desenvolvimento Web",100,100);
ctx.fillText("Desenvolvimento Web",100,100);
ctx.closePath();

