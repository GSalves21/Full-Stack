let random_number = Math.floor(Math.random() * 10);
document.getElementById("enviar").onclick = function(){
    let number = parseInt(document.getElementById("input").value)
    if (number == random_number){
        window.alert("PARABÈNS! Você adivinhou corretamente o número")
    }
    else{
        document.getElementById("body").style.setProperty("background-color","red");
        window.alert("Você não adivinhou corretamente, o numero correto era ${random_number}. ")
    }
}
