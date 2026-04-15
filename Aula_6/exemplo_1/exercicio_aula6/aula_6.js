// let Nome = prompt("Qual é o seu nome? ");
// let Idade = prompt("Qual sua idade? ");
// let Ano_atual = prompt("Digite o ano em que estamos: ");
// let ano_nascimento = Ano_atual - Idade;
// document.getElementById("username").innerHTML = "Seu nome é " + Nome;
// document.getElementById("birth").innerHTML = "Você nasceu em: " + ano_nascimento;
function soma(N1,N2){
    let resultado = N1 + N2;
    return resultado;

};
function multiplicação(N1,N2){
    let resultado = N1 * N2;
    return resultado;
}
// document.getElementById("envio").onclick = function increment(){
//     let x = parseInt(document.getElementById("my_number").value);
//     for (let y = 1;y <= x;y ++);{
//         console.log(x + y);
//     }
//      document.getElementById("resposta").innerHTML= x;
//     };

//     // Fazer uma página com duas caixas de texto que permite a entrada de dois números, que serão inseridos pelo usuário, e, assim, 
//     // que o botão soma for pressionado, exibe o resultado na própria página.

// function resultado(){
//     let Número_1 = parseFloat(document.getElementById("send").value);
//     let Número_2 = parseFloat(document.getElementById("send_2").value);
//     let resposta = soma(Número_1,Número_2);
//     document.getElementById("soma").innerHTML = resposta;


// };

// Fazer uma página que solicita dois números e realiza a soma deles se pelo menos um for negativo.
//  Caso contrário, realiza a multiplicação. O cálculo deve acontecer quando o mouse passar por cima de uma div.
let número_1 = document.getElementById("input1").value;
let número_2 = document.getElementById("input2").value;
if(número_1 < 0 || número_2 < 0){
    document.getElementById("valor").onmouseover = soma(número_1,número_2);
}
