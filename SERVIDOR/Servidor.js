require("colors")
console.log('Hello,World!'.rainbow);

// inclui o http
var http = require("http");

// inclui o express
var express = require('express');

//cria a variavél app,pela qual acessaremos os metodos / funções existentes no framework
var app = express();

// define em qual pasta estará o conteudo estático
app.use(express.static('./public'));

// criar o servidor
var server = http.createServer(app);

//define o número da porta que o servidor ouvirá
server.listen(80);

//mensagem exibida no console log para o debug
console.log("Servidor rodando...");

