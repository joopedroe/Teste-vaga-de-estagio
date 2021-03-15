const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://teste:teste@cluster0.ke8e7.mongodb.net/naver_db?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('Connection to CosmosDB successful'))
.catch((err) => console.error(err));;


server.use(express.json());
server.use(routes);
server.listen(3333);