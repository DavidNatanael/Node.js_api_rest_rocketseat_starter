const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();

// conectando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

// importação dos models
requireDir('./src/models');

const Product = mongoose.model('Product');

// definindo que quando for recebido uma requisição de /api seja requerido /routes
app.use('/api', require('./src/routes'))

// passando para o app ouvir a porta 3001
app.listen(3001);