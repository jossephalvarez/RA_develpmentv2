const Type = require('../models').TypeProduct;
const Product = require('../models').Product;

module.exports = {
    list(req, res) {
        return Type
            .all()
            .then((type) => res.status(200).send(type))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
    listWithProducts(req, res) {
        return Type
            .findAll({
                include: [{
                    model: Product,
                    as: 'products'
                }],
            })
            .then((companies) => res.status(200).send(companies))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
    getById(req, res) {
        return Type
            .findById(req.params.id)
            .then((type) => {
                if (!type) {
                    return res.status(404).send({
                        message: 'Type Not Found',
                    });
                }
                return res.status(200).send(type);
            })
            .catch((error) => res.status(400).send(error));
    },
    add(req, res) {
        return Type
            .create({
                name: req.body.name,
                code: req.body.code
            })
            .then((location) => res.status(201).send(location))
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return Type
            .findById(req.params.id)
            .then(type => {
                if (!type) {
                    return res.status(400).send({
                        message: 'type Not Found',
                    });
                }
                return type
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};