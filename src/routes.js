const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

// rota de inicio
routes.get('/products', ProductController.index);

// exportando o routes
module.exports = routes;