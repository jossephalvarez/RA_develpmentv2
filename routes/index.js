var express = require('express');
var router = express.Router();

const typeController = require('../controllers').type;
const supplyController = require('../controllers').supply;
const productController = require('../controllers').product;
const locationController = require('../controllers').location;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/*TypeProduct Router*/
router.get('/api/type', typeController.list); //OK
router.get('/api/typeWithProducts', typeController.listWithProducts); //OK

/*Product Router*/
router.get('/api/product', productController.list);//OK
router.get('/api/productWithSupplies', productController.listWithSupplies);

/*Supply Router*/
router.get('/api/supply', supplyController.list);

/*Location Router*/
router.get('/api/location', locationController.list);


module.exports = router;
