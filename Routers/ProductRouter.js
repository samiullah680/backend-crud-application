const Router = require('express').Router();
const Auth = require("../Middlewares/AuthMiddleware")

const { ProductControllerCreateProduct, ProductControllerEditProduct, ProductControllerDeleteProduct } = require("../Controllers/ProductController")
Router.route('/createProduct').post(Auth, ProductControllerCreateProduct);

Router.route('/editProduct').post(Auth, ProductControllerEditProduct);
Router.route('/deleteProduct').post(Auth, ProductControllerDeleteProduct);
Router.route('/getSingleProduct').post(Auth, ProductControllerDeleteProduct);
Router.route('/getProduct').get(Auth, ProductControllerDeleteProduct);







module.exports = Router