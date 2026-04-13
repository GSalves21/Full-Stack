let idades = [18,20];
console.log(idades);


idades.push(25);
console.log(idades);


idades.pop()
console.log(idades);


console.log(idades[0]);
console.log(idades[1]);

console.log(idades.length);

// EXEMPLO_1:
let retangulo_1 =  {
    x : 10,
    y : 10,
    w:50,
    h:50,
    color: "red"
};

// EXEMPLO_2:
let retangulo_2 =  {
    x : 100,
    y : 100,
    w:50,
    h:50,
    color: "blue"
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// quadrado 
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle="blue";
ctx.strokeStyle="red";
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle="blue";
ctx.strokeStyle="red";
ctx.moveTo(200,150);
ctx.lineTo(60,10);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

// ctx.fillRect(5,10,50,50);
// ctx.strokeRect(60,10,50,50);


// arcos

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle="blue";
ctx.strokeStyle="red";
ctx.arc(200,200,30,0*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle="blue";
ctx.strokeStyle="red";
ctx.font = ";
ctx.textAlign = "center";
ctx.strokeText("olá",200,350);
ctx.fillText("olá",200,350);
ctx.closePath();












