const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Auth = require("../Models/AuthModels/AuthModel")


const AuthControllerLogin = asyncHandler(async (req, res) => {
    const { credential, password } = req.body;
    console.log("req.body:", req.body);
    const user = await Auth.findOne({ $or: [{ email: credential }, { username: credential }] });
    if (!user) {
        throw new Error("User does not exists !");
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
        throw new Error("Incorrect password !");
    }
    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" });
    const token = jwt.sign({ id: user._id, username: user.username, userType: user.userType }, "tokenKey", { expiresIn: "3d" });
    res.status(200).json({
        user_id: user._id,
        username: user.username,
        email: user.email,
        token,
        success: true
    })
});

const AuthControllerRegistration = async (req, res) => {
    const { firstname, lastname, username, userType, email, password } = req.body;
    console.log("req.body:", req.body);
    const found = await Auth.findOne({ $or: [{ email }, { username }] });

    if (found && found.length !== 0) {
        throw new Error("User already exists !");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Auth.create({ firstname, lastname, userType, username, email, password: hashedPassword.toString() })

    if (!user) {
        throw new Error("Something went wrong ! Please try again !")
    }

    res.status(200).json({ message: "User register successfully !", success: true });
};

const AuthControllerForgetPassword = async (req, res) => {
    try {
        res.status(200).json({
            status: 200,
            message: "Password Forget link send to email"
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
}

module.exports = {
    AuthControllerLogin,
    AuthControllerRegistration,
    AuthControllerForgetPassword
}