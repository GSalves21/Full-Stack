canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

let mega_man = {
    x:150,
    y:150,
    w:50,
    h:50
}
let img =  new Image();
img.src = "download.png";
function animation(){
    ctx.clearRect(0,0,300,300);
    ctx.drawImage(img,mega_man.x,mega_man.y,mega_man.w,mega_man.h)
    requestAnimationFrame(animation);
    }
    


animation();



document.addEventListener("mousemove",function(evento){
    var rect = canvas.getBoundingClientRect();
    var x_mouse = evento.clientX - rect.left - (mega_man.w/2);
    var y_mouse = evento.clientY - rect.top - (mega_man.h/2);
    console.log(x_mouse,y_mouse);

    mega_man.x = x_mouse;
    mega_man.y = y_mouse;
    if(mega_man.x >= 300 - mega_man.w){
        mega_man.x = 300 - mega_man.w;
    }
    else if(mega_man.x <= 0){
        mega_man.x = 0;
    }
    if(mega_man.y <= 0){
        mega_man.y = 0;
    }
    else if(mega_man.y >=300)
        mega_man.y = 300 - mega_man.h;
})




