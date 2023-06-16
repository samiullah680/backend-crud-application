const Router = require('express').Router();
const bodyParser = require('body-parser');
const { GetProductController, DeleteProductController, CreateProductController, GetSingleProductController, EditProductController } = require('../Controllers/CrudController');
const EmpData = require("../Models/Emp")
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Router.get('/get', GetProductController);
// Router.post("/delete", DeleteProductController);
// Router.post("/create", CreateProductController);
// Router.post("/getsingledata", urlencodedParser, GetSingleProductController);
// Router.patch("/edit", urlencodedParser, EditProductController);

Router.route('/get').get(GetProductController);
Router.route("/delete").post(DeleteProductController);
Router.route("/create").post(CreateProductController);
Router.route("/getsingledata").post(urlencodedParser, GetSingleProductController);
Router.route("/edit").patch(urlencodedParser, EditProductController);


module.exports = Router;