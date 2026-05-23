// primera vez fazendo o servidor sozinho

// chama a biblioteca http
var http = require('http');

//chama a biblioteca express
var express = require('express');

var app = express();

//quando o servidor rodar redirecionará para a pagina html que estiver dentro dessa pasta
app.use(express.static('./public'));

app.get('/',function(req,resp){
    resp.redirect('projects.html')
})

//cria o servidor e entrega as requisições pro express as fazer
var servidor = http.createServer(app);

//porta do servidor
servidor.listen(80);


console.log('funcionou');