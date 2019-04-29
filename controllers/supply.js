const Supply = require('../models').Supply;
const Product = require('../models').Product;
const SupplyProduct = require('../models').SupplyProduct;

module.exports = {
    list(req, res) {
        return Supply
            .findAll({
                include: [{
                    model: Product,
                    as: 'products'
                }],
            })
            .then((supplies) => res.status(200).send(supplies))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
};