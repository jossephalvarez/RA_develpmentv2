var express = require('express');
var router = express.Router();

const typeController = require('../controllers').type;
const supplyController = require('../controllers').supply;
const productController = require('../controllers').product;

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


module.exports = router;
