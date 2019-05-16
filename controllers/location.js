const Location = require('../models').Location;
const Supply = require('../models').Supply;
const SupplyProduct = require('../models').SupplyProduct;

module.exports = {
    list(req, res) {
        return Location
            .findAll(
              /* {
                    include: [{
                        model: Supply,
                        as: 'supplies'
                    }],
                }*/
            )
            .then((locations) => res.status(200).send(locations))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
    getById(req, res) {
        return Location
            .findById(req.params.id)
            .then((location) => {
                if (!location) {
                    return res.status(404).send({
                        message: 'Location Not Found',
                    });
                }
                return res.status(200).send(location);
            })
            .catch((error) => res.status(400).send(error));
    },
    add(req, res) {
        return Location
            .create({
                name: req.body.name,
                address: req.body.address,
                province: req.body.province,
                city: req.body.city
            })
            .then((location) => res.status(201).send(location))
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return Location
            .findById(req.params.id)
            .then(location => {
                if (!location) {
                    return res.status(400).send({
                        message: 'Location Not Found',
                    });
                }
                return location
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};