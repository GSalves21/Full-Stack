var http = require('http');
var express = require('express')
var app = express();

var server = http.createServer(app);
app.set('view engine','ejs');
app.set('views','./views');

server.listen(80);

var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const client = new MongoClient(uri,{useNewUrlParser:true});

var dbo = client.db('blog');
var posts = dbo.collection('posts');

app.use(express.static('./public'));

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',function(req,resp){
    resp.redirect('/cadastrar_post.html');
})

app.get('/blog',function(req,resp){
    posts.find({}).toArray(function(err,items){
    resp.render('blog',{items});
    })
})

app.post('/enviar',function(req,resp){
    var dados = {db_titulo:req.body.titulo,db_resumo:req.body.resumo,db_conteudo:req.body.conteudo};
    posts.insertOne(dados,function(err){
        if(err){
            console.log(err);
            resp.redirect('/blog');
        }else{
            resp.redirect('/blog');
        }
    });


});

console.log('Servidor Rodando...');