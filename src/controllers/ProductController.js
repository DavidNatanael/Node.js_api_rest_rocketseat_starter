const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// exportando os controllers
module.exports = {

    /**
     * metodo para listar os dados
     * criado função assincrona para dar select no bd
     * como resposta é enviado um json com os dados resgatados
     */ 
    async index(req, res) {
        const products = await Product.find();
        return res.json(products);
    },

    /**
     * metodo para cadastrar novos dados
     * criado função assincrona para criar um novo produto com os dados informados no corpo da requisição
     * os dados são enviados como um  arquivo json
     */
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    /**
     * metodo para detalhar um produto
     * criada função assincrona para selecionar um produto pelo seu id no bd
     */
    async show(req, res) {
        const product = await Product.findById(req.params.id); 
        return  res.json(product);
    },

    /**
     * metodo para atualizar o produto
     * criada função assincrona que seleciona o produto pelo id, capturado o corpo do produto para atualizar, devolvido o produto atualizado
     */
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new:true });
        return res.json(product);
    },

    /**
     * metodo para deletar os produtos
     * criada a função assincrona que captura o produto pelo id e o deleta
     */
    async destroy(req, res) {
        await Product.findByIdAndDelete(req.params.id);
        return res.send();
    },
};