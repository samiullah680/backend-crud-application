
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

let EmpData = mongoose.model("empdata", Emp, "empdatas");

module.exports = EmpData;