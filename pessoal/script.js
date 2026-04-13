let canvas = getElementByid("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 3;
ctx.arc(200,200,30,0*Math.PI,2*Math.PI);
ctx.strokeStyle ="red";
ctx.stroke();
ctx.closePath();


ctx.beginPath()
ctx.lineWidth = 3;
ctx.arc(201,200,30,0*Math.PI,2*Math.PI);
ctx.strokeStyle="red";
ctx.stroke();
ctx.closePath();