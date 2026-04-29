require("colors")
console.log('Hello,World!'.rainbow);

// inclui o http
var http = require("http");

// inclui o express
var express = require('express');

let bodyParser = require("body-parser");

//cria a variavél app,pela qual acessaremos os metodos / funções existentes no framework
var app = express();
app.use(express.static("/public"));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

// define em qual pasta estará o conteudo estático
app.use(express.static('./public'));

// criar o servidor
var server = http.createServer(app);

//define o número da porta que o servidor ouvirá
server.listen(80);

//mensagem exibida no console log para o debug
console.log("Servidor rodando...");

// espeificando
app.get('/',function(req,res){
    res.redirect("home.html")


})

app.get("/inicio",function(req,res){
    var text= req.query.text;
    var number = req.query.number;
    var color = req.query.color;
    

    console.log(text,number,color);
    res.redirect("home.html");
    console.log("Requisição feita por post")
})

app.post("/inicio", function(req,resp){
    var text= req.query.text;
    var number = req.query.number;
    var color = req.query.color;
    console.log(text,number,color);
    console.log("Requisição feita por post")


})


app.post("/cadastro",function(req,res){
    var nome = req.body.nome
    var login = req.body.login
    var senha = req.body.senha
    console.log(nome,login,senha)

    res.render("resposta.ejs",{resposta:"usuario cadastrado com sucesso"})
})

app.get("/for",function(req,res){
    var qtde = req.query.qtde
    res.render("exemplo_for.ejs",{qtde:qtde})
})