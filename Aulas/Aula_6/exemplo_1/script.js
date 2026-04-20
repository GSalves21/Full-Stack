document.getElementById("d1").innerHTML="Gabriel Alves Silva";
let Nome = "Gabriel"
// prompt("Digite seu nome");
let idade = 18 
//  prompt("Digite sua idade:")
let Ano = 2026;
let ano_nasc = Ano - idade;
document.getElementById("resp_ex_1").innerHTML = "Olá " + Nome  + ", seu ano de nascimento é " + ano_nasc + "!"

// // funções
// function mensagem(){
//     alert("olá");
// }
// function mensagem_2(texto){
//     alert(texto);
// }
// mensagem();
// mensagem_2();
// mensagem_2("Gabriel");
// mensagem_2("Alves");

// exemplo de return

function soma (N1,N2){ return N1 + N2};
function subt(N1,N2){return N1 - N2};
function mult(N1,N2){return N1 * N2};
function divs(N1,N2){return N1 / N2};

resp = soma(20,15);
document.getElementById("soma").innerHTML = resp

function exemplo_2(){
    let x = parseInt(document.getElementById("input_exemplo_2").value);

    for(let i = 1; i <= x; i++){
        console.log(x + i);
    }
    
    document.getElementById("resp_ex_2").innerHTML = x

}

function exemplo3(){
    let a = parseInt(document.getElementById("in_1_ex3").value);
    let b = parseInt(document.getElementById("in_2_ex3").value);

    let resp = soma(a,b);
    document.getElementById("resp_ex3").innerHTML = resp;
}
function Exemplo4(){
    let a = parseInt(document.getElementById("in_1_ex4"))
    let b = parseInt(document.getElementById("in_2_ex4"))
    if(a < 0 || b < 0){
    resp = soma(a,b);}
    else{
        resp = mult(a,b);
    }
document.getElementById("resp_ex4").innerHTML = resp;
}
