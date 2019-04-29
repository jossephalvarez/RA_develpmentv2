const Product = require('../models').Product;
const Type = require('../models').TypeProduct;
const Supply = require('../models').Supply;
const SupplyProduct = require('../models').SupplyProduct;

module.exports = {
    list(req, res) {
        return Product
            .findAll({
                include: [{
                    model: Type,
                    as: 'type'
                }]
            })
            .then((products) => res.status(200).send(products))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
    listWithSupplies(req, res) {
        return Product
            .findAll({
                include: [{
                    model: Supply,
                    as: 'supplies'
                }]
            })
            .then((products) => res.status(200).send(products))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
};