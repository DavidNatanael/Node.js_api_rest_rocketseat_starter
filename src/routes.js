const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

/**
 * rota para listar os produtos
 * chamada a função index que cria uma lista
 */
routes.get('/products', ProductController.index);

/**
 *  rota de cadastro
 * chamada a função store que armazena os dados
 */
routes.post('/products', ProductController.store);

/**
 * rota para detalhar o produto
 * passado que a rota deve selecionar o id
 * chamada a função show que seleciona o id
 */
routes.get('/products/:id',  ProductController.show);

/**
 * rota para atualizar o produto
 * chamada a função update que atualiza o produto
 */
routes.put('/products/:id', ProductController.update);

/**
 * rota para deletar o produto
 * chamada a função destroy que deleta o produto
 */
routes.delete('/products/:id', ProductController.destroy);

// exportando o routes
module.exports = routes;