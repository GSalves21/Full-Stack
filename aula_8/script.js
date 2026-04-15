

let retangulo_1 =  {
    x : 10,
    y : 10,
    w:50,
    h:50,
    color: "red"
};

let retangulo_2 =  {
    x : 100,
    y : 100,
    w:50,
    h:50,
    color: "blue"
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function desenha_retangulo(ret){
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = ret.color;
ctx.fillRect(ret.x,ret.y,ret.w,ret.h);
ctx.closePath();
}

let mov = 1;
function desenhar(){
    ctx.clearRect(0,0,400,400); // apaga o objeto anterior ao se movimentar
    
    if(retangulo_1.x == 400 - retangulo_1.w){mov = -1}
    if(retangulo_1.x == 0)                  {mov = 1}

    retangulo_1.x = retangulo_1.x + mov;

    desenha_retangulo(retangulo_1);
    desenha_retangulo(retangulo_2);
    requestAnimationFrame(desenhar);
}
desenhar()

document.addEventListener("keydown", function(evento){
    var tecla = evento.key;
    console.log(tecla);

    var vel = 10;

    if(tecla == "ArrowUp"){retangulo_2.y -= vel}
    if(tecla == "ArrowDown"){retangulo_2.y += vel}
    if(tecla == "ArrowLeft"){retangulo_2.x -= vel}
    if(tecla == "ArrowRight"){retangulo_2.x += vel}

    });











// setInterval(funcao, tempo) 
// Inicia repetidamente executando a função especificada a cada milésimo de segundo de atraso.


// setTimeout(funcao, tempo)
// Executa a função especificada com milissegundos de atraso.

// requestAnimationFrame(funcao)
// Informa ao navegador que você deseja executar uma animação e solicita que o navegador chame uma função específica para atualizar
//  uma animação antes da próxima repintura.

