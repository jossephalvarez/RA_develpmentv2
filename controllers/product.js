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
                    as: 'type',
                    attributes: {
                             //include: ['id', 'name'],
                             exclude: ['createdAt', 'updatedAt']
                         }
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
    getById(req, res) {
        return Product
            .findById(req.params.id)
            .then((product) => {
                if (!product) {
                    return res.status(404).send({
                        message: 'product Not Found',
                    });
                }
                return res.status(200).send(product);
            })
            .catch((error) => res.status(400).send(error));
    },
};