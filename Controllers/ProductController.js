const Router = require('express')
const ProdctModel = require('../Models/ProductModels/AllProductModel')
const ProductControllerCreateProduct = async (req, res) => {
    try {
        let post = await ProdctModel.create({ ...req.body })
        res.status(200).json({
            status: 200,
            data: post,
            message: "Product Created"
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
}

const ProductControllerEditProduct = async (req, res) => {
    const editData = {
        title: req.body.title,
        Additional_Image: req.body.Additional_Image,
        brand: req.body.brand,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        rating: req.body.rating,

    }
    try {
        let EditData = await EmpData.findByIdAndUpdate(req.body.id, editData, {
            new: true
        });
        if (post) {
            res.status(200).json({
                status: 200,
                data: EditData,
                message: "Product Edit Successfull"
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

const ProductControllerDeleteProduct = async (req, res) => {
    try {
        let deleteProduct = await ProdctModel.findByIdAndRemove(req.query.id);
        if (deleteProduct) {
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


const ProductControllerGetProduct = async (req, res) => {
    try {
        res.status(200).json({
            status: 200,
            message: "Product  Get Product Success Full"
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
}

const ProductControllerGetSingleProduct = async (req, res) => {
    try {
        // let post = await EmpData.findByIdAndRemove(req.query.id);
        let singleProduct = await ProdctModel.findOne({
            _id: req.query.id,
        });
        if (singleProduct) {
            res.status(200).json({
                status: 200,
                data: singleProduct,
                message: "Single Product get successfully",
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
    ProductControllerCreateProduct,
    ProductControllerEditProduct,
    ProductControllerDeleteProduct,
    ProductControllerGetProduct,
    ProductControllerGetSingleProduct
}