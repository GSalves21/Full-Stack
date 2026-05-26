var http = require('http');
var express = require('express');
var app = express()

var server = http.createServer(app);
server.listen(80);
app.use(express.static('./public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine','ejs');
app.set('views','./views')

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var uri = 'mongodb://localhost:27017/'
var Client = new MongoClient(uri,{useNewUrlParser:true});
const dbo = Client.db('LAB');
const posts = dbo.collection('posts');


app.get('/cadastrar_post',function(req,resp){
    resp.redirect('cadastrar_post.html');
})

app.get('/blog',function(req,resp){
    posts.find({}).toArray(function(err,items){
        if (items.length == 0){
            resp.redirect('cadastrar_post.html')
        }else if (err){
            resp.render('erro.ejs',{resposta:'Ocorreu um erro com o banco de dados'})
        }else{
           resp.render('blog.ejs',{items:items}) 
        }
    });
});

app.post('/postar',function(req,resp){
    var dados = {db_titulo:req.body.titulo,db_resumo:req.body.resumo,db_conteudo:req.body.conteudo};
    posts.insertOne(dados,function(err){
        if (err){
            console.log(err);
            resp.render('erro.ejs',{resposta:'Ocorreu um erro ao postar.'})
        }else{resp.redirect('/blog')}
    })
})

console.log('Rodando...')