const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

//Iniciando o App
const app = express();
//usado para dar permissão para envio
//de informações json para a aplicação.
app.use(express.json());
/// para acessar a aplicação  se usa o cors 
/// da para limitar quem teria acesso passando como parametro
app.use(cors());

//Iniciando o DB
mongoose.connect(
    'mongodb://192.168.99.100:27017/nodeapi',
    {
     useUnifiedTopology: true,
     useNewUrlParser:true,
    }
);
requireDir('./src/models');


//Primeira Rota
app.use('/api', require("./src/routes"));



app.listen(3001);



