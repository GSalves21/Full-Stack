// primera vez fazendo o servidor sozinho

// chama a biblioteca http
var http = require('http');

//chama a biblioteca express
var express = require('express');

var app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine','ejs');
app.set('views','./views');



//cria o servidor e entrega as requisições pro express as fazer
var servidor = http.createServer(app);

//porta do servidor
servidor.listen(80);

//quando o servidor rodar redirecionará para a pagina html que estiver dentro dessa pasta
app.use(express.static('./public'));


app.get('/',function(req,resp){
    resp.redirect('projects.html');
})

app.get('/cadastra',function(req,resp){
    resp.redirect('/LAB/LAB_8/Cadastro.html');
})

app.get('/login',function(req,resp){
    resp.redirect('/LAB/LAB_8/Login.html');
})

app.post('/validar_cadastro',function(req,resp){
    var usuario = req.body.usuario;
    var email = req.body.email;
    var senha = req.body.senha;
    resp.render('cadastro_status', {usuario,email,senha});
    console.log(usuario,email,senha);
})

app.post('/logar',function(req,resp){
    var usuario = req.body.usuario;
    var email = req.body.email;
    var senha = req.body.senha;
    resp.render('resposta', {usuario,email,senha});
    console.log(usuario,email,senha);
})




console.log('funcionou');