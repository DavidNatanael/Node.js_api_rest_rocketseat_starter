const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// exportando os controllers
module.exports = {

    // metodo para listar os dados
    async index(req, res) {
        const products = await Product.find();
        return res.json(products);
    }
};