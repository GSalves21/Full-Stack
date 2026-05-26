var http = require('http');
var express = require('express');
var app = express();

var server = http.createServer(app);
server.listen(3000);

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const client = new MongoClient(uri,{useNewUrlParser:true});
const dbo = client.db('LABS');
const users = dbo.collection('Usuarios');
const carros = dbo.collection('Carros')
app.get('/cadastrar',function(req,resp){
    resp.redirect('cadastro.html');

})
app.get('/logar',function(req,resp){
    resp.redirect('login.html');
})

app.post('/cadastra',function(req,resp){
    var cadastro  = {db_usuario:req.body.usuario,db_email:req.body.email,db_senha:req.body.senha};
    users.insertOne(cadastro,function(err){
        if (err){
            resp.render('status_cadastro',{resposta:'Erro ao cadastrar usuário!'})
        }else{
            resp.render('status_cadastro',{resposta:'Cadastrado com sucesso!'})
        }
    });
});

app.post('/login',function(req,resp){
    dados_login = {db_usuario:req.body.usuario,db_email:req.body.email,db_senha:req.body.senha};
    users.find(dados_login).toArray(function(err,items){
        if(items.length == 0){
            resp.render('status_login',{resposta:'Usuário não encontrado'})
        }else if (err){
            resp.render('status_login',{resposta:'erro ao logar usuario'})

        }else{
            resp.render('login',{resposta:'usuario logado com sucesso'})
        }
    })
})
app.post('/novo_carro',function(req,resp){
    dados_carro = {marca:req.body.marca,modelo:req.body.modelo,ano:req.body.ano,qtde_disponivel:req.body.qtde_disponivel};
    carros.insertOne(dados_carro,function(err){
    if(err){
        resp.render('status_registro_carro',{resposta:'Ocorreu um erro! Tente novamente'})
    }else
        resp.render('status_registro_carro',{resposta:'Operação realizada com sucesso!'})
    })
})

console.log('rodando...');
