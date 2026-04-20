// Desenvolver um algoritmo em JavaScript que exiba os números ímpares de 1 a 100


// let Número = 0;
// while (Número < 100){
//     Número += 1
//     if (Número % 2 != 0){
//         console.log(Número)
// }   }

//Faça um programa para imprimir os múltiplos de 5, no intervalo de 1 até 500
// let número = 0
// while (número < 500){
//     número +=5
//     console.log(número)
// }

// Faça um programa em JavaScript que leia um número inteiro positivo e mostre todos os números a partir dele até zero (decrescente).  
// let Número_lido = prompt("Digite um número inteiro positivo a ser lido");
// while (Número_lido < 0){
//     window.alert("Número inválido,digite um número positivo!");
//      Número_lido = prompt("Digite um número inteiro positivo a ser lido");

// }
// for (let números = Número_lido;números > 0;números -= 1){
//     console.log(números);
// }


// Desenvolver um algoritmo em JavaScript que exibe o resultado do fatorial de um número inteiro informado pelo usuário
// let número_inteiro = parseInt(prompt("Digite um número para ser exibido o resultado do fatorial dele: "));
// let operação = 1;
// while(número_inteiro < 0){
//     window.alert("Número inválido,digite um número positivo");
//      número_inteiro = prompt("Digite um número para ser exibido o resultado do fatorial dele: ");
// }
// for(let fator = número_inteiro;fator >=1 ; fator -= 1){
//     operação = operação * fator;
// }
// window.alert(operação);

// Foi realizada uma pesquisa entre os habitantes de uma dada região. Foram recolhidos os dados de idade, sexo (M/F) e salário. Construa um programa em JavaScript que informe:
// a média de salário do grupo; 
// maior e menor idade do grupo; 
// quantidade de mulheres com salário até R$5000,00. 
// Encerre a entrada de dados quando for digitada uma idade negativa.
let idade = 0;
let média = 0;
let maior_idade = 0;
let menor_idade = 99999;
contador_mulher = 0;
let contador = 0;

while (idade >= 0){
idade = parseInt(prompt("Digite sua idade: "));
if (idade < 0){
    break;
}
let sexo = prompt("Insira o seu sexo: ");
let salario = parseFloat(prompt("Qual o seu salário? : "));
contador += 1;
média = média + salario;
if(idade > maior_idade){
    maior_idade = idade;
}
if (idade < menor_idade){
    menor_idade = idade;
}
if (sexo === "mulher" || sexo === "Mulher" && salario <= 5000){
    contador_mulher += 1;
}

}
média = média / contador;
console.log("média: " + média);
console.log("maior idade: " + maior_idade);
console.log("menor idade: " + menor_idade);
console.log("Número de mulheres com salário de até 5000: " + contador_mulher);
