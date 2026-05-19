let megaMan = {
    x : 130,
    y:130,
    w:40,
    h:40

};

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d");


let img = new Image();
img.src = "download.png";

function desenhar(x,y,w,h){
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.drawImage(img,megaMan.x,megaMan.y,megaMan.w,megaMan.h);
    ctx.closePath();
    requestAnimationFrame(desenhar);
};
desenhar();


document.addEventListener("mousemove",function(movimento){
    var rect = canvas.getBoundingClientRect();
    var mouse_x = movimento.clientX - rect.left;
    var mouse_y = movimento.clientY - rect.top;
    console.log(mouse_x,mouse_y)
    megaMan.x = mouse_x;
    megaMan.y = mouse_y; 
    if(megaMan.x >= 300 - megaMan.w){
        megaMan.x = 300 - megaMan.w 
    }
    else if(megaMan.x <= 0){
        megaMan.x = 0
    };
    if (megaMan.y <= 0){
        megaMan.y = 0
    }
    else if(megaMan.y >= 300 - megaMan.h){
        megaMan.y = 300 - megaMan.h
    };


});


