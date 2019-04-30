const Supply = require('../models').Supply;
const Product = require('../models').Product;
const User = require('../models').User;
const Location = require('../models').Location;
const SupplyProduct = require('../models').SupplyProduct;
const TypeProduct = require('../models').TypeProduct;

module.exports = {
    list(req, res) {
        return Supply
            .findAll()
            .then((supplies) => res.status(200).send(supplies))
            .catch((error) => {
                res.status(400).send(error);
            });
    }, listProducts(req, res) {
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
    getById(req, res) {
        return Supply
        //.findById(req.params.id)
        //Resume JSON
            .findOne({
                where: {id: req.params.id},
                attributes: {exclude: ['createdAt', 'updatedAt']},
                include: [{
                    model: Product,
                    as: 'products',
                    attributes: ['id'],
                    through: {
                        model: SupplyProduct,
                        attributes: {
                            include: ['id', 'quantity'],
                            exclude: ['createdAt', 'updatedAt', 'supply_id', 'product_id']
                        }
                    },
                    // through:{
                    //     model:TypeProduct
                    // }
                }],
            })
            .then((supply) => {
                if (!supply) {
                    return res.status(404).send({
                        message: 'Supply Not Found',
                    });
                }
                return res.status(200).send(supply);
            })
            .catch((error) => res.status(400).send(error));
    },
    listByUser(req, res) {
        return Supply
            .findAll({
                where: {
                    UserId: req.params.UserId
                },
                include: [{
                    model: Product,
                    as: 'products'
                }],
            })
            .then((supplies) => {
                if (supplies.length == 0) {
                    return res.status(404).send({
                        message: 'Supplies Not Found',
                    });
                }
                return res.status(200).send(supplies);
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },
    listByLocation(req, res) {
        return Supply
            .findAll({
                where: {
                    location_id: req.params.location_id
                },
                include: [{
                    model: Product,
                    as: 'products'
                }],
            })
            .then((supplies) => {
                if (supplies.length == 0) {
                    return res.status(404).send({
                        message: 'Supplies Not Found',
                    });
                }
                return res.status(200).send(supplies);
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },
    listByUserAndLocation(req, res) {
        return Supply
            .findAll({
                where: {
                    UserId: req.params.UserId,
                    location_id: req.params.location_id
                },
                include: [{
                    model: Product,
                    as: 'products'
                }],
            })
            .then((supplies) => {
                if (supplies.length == 0) {
                    return res.status(404).send({
                        message: 'Supplies Not Found',
                    });
                }
                return res.status(200).send(supplies);
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },
    listByUserAndLocationByDates(req, res) {
        if (!req.body.date_start || !req.body.date_end)
            res.status(400).send("Dates not defined");
        else {
            return Supply
                .findAll({
                    where: {
                        UserId: req.params.UserId,
                        location_id: req.params.location_id,
                        date: {
                            "$between": [req.body.date_start, req.body.date_end]
                        }
                    },
                    include: [{
                        model: Product,
                        as: 'products'
                    }],
                })
                .then((supplies) => {
                    if (supplies.length == 0) {
                        return res.status(404).send({
                            message: 'Supplies Not Found',
                        });
                    }
                    return res.status(200).send(supplies);
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }

    },
    add(req, res) {
        return Supply
            .create({
                date: req.body.date,
                location_id: req.body.location_id,
                UserId: req.body.UserId
            })
            .then((supply) => {
                if (!supply) {
                    return res.status(404).send({
                        message: 'supply Not created',
                    });
                }
                let products = req.body.listProducts;
                if (products.length > 0) {
                    products.forEach(p => {
                        Product.findById(p.product_id).then((product) => {
                            if (!product) {
                                return res.status(404).send({
                                    message: 'Product Not Found',
                                });
                            }
                            SupplyProduct.create({
                                supply_id: supply.id,
                                product_id: product.id,
                                quantity: p.quantity
                            })
                                .then((supplyProduct) => {
                                    if (!supplyProduct) {
                                        return res.status(404).send({
                                            message: 'supplyProduct Not created',
                                        });
                                    }
                                    return res.status(200).send(supplyProduct);
                                })

                        })
                    })
                } else {
                    return res.status(404).send({
                        message: 'supplyProduct Not created',
                    });
                }
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return Supply
            .findById(req.params.id)
            .then(supply => {
                if (!supply) {
                    return res.status(400).send({
                        message: 'supply Not Found',
                    });
                }
                return supply
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    updateSupplyProduct(req, res) {
        return Supply
            .findOne({
                where: {id: req.params.id},
                attributes: {exclude: ['createdAt', 'updatedAt']},
                include: [{
                    model: Product,
                    as: 'products',
                    attributes: ['id'],
                    through: {
                        model: SupplyProduct,
                       /* attributes: {
                            include: ['id', 'quantity'],
                            exclude: ['createdAt', 'updatedAt', 'supply_id', 'product_id']
                        }*/
                    },
                    // through:{
                    //     model:TypeProduct
                    // }
                }],
            })
            .then(supply => {
                if (!supply) {
                    return res.status(404).send({
                        message: 'supply Not Found',
                    });
                }
                //return res.status(200).send(supply);
                let sProducts = supply.products;
                // console.log("NUMBER---" + (sProducts.length));
                //
                return sProducts[0].SupplyProduct.update({
                    quantity: 887
                })
                    .then((supplyProduct) => res.status(200).send(supplyProduct))
                    .catch((error) => res.status(400).send(error));

                /*  if (sProducts.length > 0) {
                      let indexSupplyProduct = 0;
                      sProducts.forEach(p => {
                          //console.log(p.SupplyProduct);
                          console.log("indexSupplyProduct---" + indexSupplyProduct);
                          console.log(req.body.products[indexSupplyProduct].SupplyProduct.quantity);
                          indexSupplyProduct++;
                          /!*  p.SupplyProduct.update({
                                quantity: 100
                            }).then((s) => {
                                indexSupplyProduct++;
                                if (!s) {
                                    return res.status(404).send({
                                        message: 'supplyProduct Not Updated',
                                    });
                                }
                                return res.status(200).send(s);
                            })*!/
                      })
                  }*/

            })
            .catch((error) => res.status(400).send(error));
    }
};