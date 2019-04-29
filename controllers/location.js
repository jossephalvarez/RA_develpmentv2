const Location = require('../models').Location;
const Supply = require('../models').Supply;
const SupplyProduct = require('../models').SupplyProduct;

module.exports = {
    list(req, res) {
        return Location
            .findAll({
                include: [{
                    model: Supply,
                    as: 'supplies'
                }],
            })
            .then((locations) => res.status(200).send(locations))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
};