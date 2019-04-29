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
router.get('/api/type/products', typeController.listWithProducts); //OK
router.get('/api/type/:id', typeController.getById); //OK
router.post('/api/type', typeController.add); //OK
router.delete('/api/type/:id', typeController.delete); //OK

/*Product Router*/
router.get('/api/product', productController.list);//OK
router.get('/api/product/supplies', productController.listWithSupplies);
router.get('/api/product/:id', productController.getById);

/*Supply Router*/
router.get('/api/supply', supplyController.list);
router.get('/api/supply/products', supplyController.listProducts);
router.get('/api/supply/:id', supplyController.getById);

/*Location Router*/
router.get('/api/location', locationController.list);
router.get('/api/location/:id', locationController.getById);
router.post('/api/location', locationController.add);
router.delete('/api/location/:id', locationController.delete);


module.exports = router;
