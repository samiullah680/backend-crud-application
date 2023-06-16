const { json } = require('express');
var express = require('express');
var app = express();
const mongoose = require("mongoose");
const EmpData = require("./Models/Emp")
const NewEmp = require("./Models/NewEmp")
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json());
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
//import ProductRouter
const ProductRouter = require("./Routers/ProductRouter");
//import CrudRouter
const CrudRouter = require("./Routers/CrudRouter")
app.use('/', CrudRouter)

//Import AuthRouter
const AuthRouter = require("./Routers/AuthRouter")
app.use('/', AuthRouter)


mongoose.connect(
    'mongodb+srv://grouptech61:sami1234@cluster0.9qzlgyw.mongodb.net/eShop?retryWrites=true&w=majority')
    .then((e) => {
        app.listen(3009, () => {
            console.log("Server and databased  is Connected  on port 3009");
        });
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    }
    );







