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
const uri = 'mongodb://localhost:27017/'
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
            resp.render('status_login',{resposta:'usuario logado com sucesso'})
        }
    })
})
app.get('/gerenciar_carros',function(req,resp){
    resp.redirect('gerenciar.html')
})


app.post('/novo_carro',function(req,resp){
    var dados_carro = {marca:req.body.marca,modelo:req.body.modelo,ano:req.body.ano,qtde_disponivel:req.body.qtde_disponivel};
    carros.insertOne(dados_carro,function(err){
    if(err){
        resp.render('status_registro_carro',{resposta:'Ocorreu um erro! Tente novamente'})
    }else
        resp.render('status_registro_carro',{resposta:'Operação realizada com sucesso!'})
    })
})

app.post('/apagar_carro',function(req,resp){
    var dados_carro_apagar = {modelo:req.body.modelo,ano:req.body.ano}
    carros.deleteOne(dados_carro_apagar,function(err,result){
        if (result.deletedCount == 0){
            resp.render('status_registro_carro',{resposta:'Veiculo não encontrado,Não foi possivel exclui-lo!'})
        }else if(err){
            resp.render('status_registro_carro',{resposta:'A operação deu erro!'})
        }else{
            resp.render('status_registro_carro',{resposta:'Veiculo excluido com sucesso!'})
        }
    });

});

app.post('/atualizar',function(req,resp){
    var dados = {modelo:req.body.modelo,ano:req.body.ano}
    var dados_atualizados={$set:{ano:req.body.novo_ano,marca:req.body.marca_atualizada,qtde_disponivel:req.body.qtde_disponivel} }
    carros.updateOne(dados,dados_atualizados,function(err,result){
        if (result.modifiedCount == 0){
            resp.render('status_registro_carro',{resposta:'O veiuclo que você quer atualizar não foi encontrado!'})
        }else if (err){
            resp.render('status_registro_carro',{resposta:'Ocorreu algum erro ao tentar atualizar!'})
        }else{
            resp.render('status_registro_carro',{resposta:'Informações do veiculo atualizadas com sucesso!'})
        }
    });
    });

app.post('/vender',function(req,resp){
    var dados = {modelo:req.body.modelo,ano:req.body.ano}
    carros.find(dados).toArray(function(err,items){
        if (err){
            resp.render(status_registro_carro,{resposta:'Erro ao atualizar'})
        }else if(items.length == 0){
            resp.render('status_registro_carro',{resposta:'Não encontrado'})
        }else{
            var quantidade_disponivel = Number(items[0].qtde_disponivel)
            if(quantidade_disponivel == 0){
                resp.render('status_registro_carro',{resposta:'Esgotado(não foi possivel vender)'})
            }else{
                quantidade_disponivel = quantidade_disponivel - 1
                var dados_atualizados = {$set:{qtde_disponivel:quantidade_disponivel}};                

            carros.updateOne(dados,dados_atualizados,function(err,result){
                if (err){
                    resp.render('status_registro_carro',{resposta:'Erro na venda'})

                }else if(result.modifiedCount = 0){
                    resp.render('status_registro_carro',{resposta:'Venda não realizada'})
                }else
                    resp.render('status_registro_carro',{resposta:'Venda realizada'})

            });
        }
        }
    });
});

app.get('/disponiveis',function(req,resp){
    carros.find({}).toArray(function(err,items){
        if (err){
            console.log('Erro ao ler os dados da coleção')
            resp.redirect('/gerenciar_carros')
        }else{
            resp.render('carros_disponiveis',{items})

        }
    })
})
        
    





console.log('rodando...');
