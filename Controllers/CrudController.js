
const bodyParser = require('body-parser');
const EmpData = require("../Models/Emp")
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const GetProductController = async (req, res) => {
    let count = req.query.count;
    let page = req.query.page - 1;
    let TotleCount = null;
    let temp = [];
    if (req.query.search) {
        temp = await EmpData.find({ Name: req.query.search }).limit(count)
            .skip(count * page)
        TotleCount = await EmpData.count({ Name: req.query.search })
    } else {
        temp = await EmpData.find({}).limit(count)
            .skip(count * page)
        TotleCount = await EmpData.count({})
    }
    try {
        res.status(200).json({
            status: 200,
            data: temp,
            totleCount: TotleCount,
            message: "Get data successfully"
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
}

const DeleteProductController = async (req, res) => {
    console.log("req.params.postId:", req.query)
    try {
        let post = await EmpData.findByIdAndRemove(req.query.id);
        if (post) {
            res.status(200).json({
                status: 200,
                message: "Post deleted successfully",
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "No post found",
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
}

const CreateProductController = async (req, res) => {
    try {
        let post = await EmpData.create({ ...req.body })
        res.status(200).json({
            status: 200,
            data: post,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
}

const EditProductController = async (req, res) => {
    const editData = {
        Name: req.body.Name,
        Email: req.body.Email,
        Password: req.body.Password,
        Number: req.body.Number
    }
    try {
        let post = await EmpData.findByIdAndUpdate(req.body.id, editData, {
            new: true
        });
        if (post) {
            res.status(200).json({
                status: 200,
                data: post,
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "No post found",
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
}

const GetSingleProductController = async (req, res) => {
    console.log("req.params.postId:", req.query)
    try {
        // let post = await EmpData.findByIdAndRemove(req.query.id);
        let post = await EmpData.findOne({
            _id: req.query.id,
        });
        if (post) {
            res.status(200).json({
                status: 200,
                data: post
                // message: "Post deleted successfully",
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "No post found",
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
}

module.exports = {
    GetProductController,
    DeleteProductController,
    EditProductController,
    CreateProductController,
    GetSingleProductController
}