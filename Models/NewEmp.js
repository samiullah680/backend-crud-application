
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Emp = new Schema({
    Name: {
        type: String,
    },
    Email: {
        type: String,
    },
    Password: {
        type: String,

    },
    Number: {
        type: String,
    },
});

let newEmp = mongoose.model("newEmp", Emp,);

module.exports = newEmp;