let number;
document.getElementById("first_button").onclick = function(){
     number = Math.floor(Math.random() * 50) + 1;
   document.getElementById("print_number").innerHTML = number;
};

// exercicio 2:

document.getElementById("second_button").onclick = function(){
    let campo_mensagem = document.getElementById("mensagem");
    valor = Number(document.getElementById("input_ex_2").value);
    if (valor >= 0 && valor < 10 ){
        campo_mensagem.innerHTML  = "Insuficiente";
    }
    else if(valor >=10 && valor <= 15){
        campo_mensagem.innerHTML = "Bom";
    }
    else if(valor > 15){
        campo_mensagem.innerHTML = "Muito Bom";
    }
        
    
}

// exercicio 3:
let username = document.getElementById("nome").value;
let login = document.getElementById("login").value;
let senha = document.getElementById("senha").value;
document.getElementById("cadastrar").onclick = function(){
    if (username !== "" && login !== "" && senha !== ""){
        window.alert("Se você quiser cadastrar uma pessoa nova clique primeiro no botão de limpar!");
        return;
    }
    let username = document.getElementById("nome").value;
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    console.log(username);
}
