const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    name:{
        type:String, //datatype
        required:true, //validate
    },
    address:{
        type:String, //datatype
        required:true, //validate
    },
    packSize:{
        type:String, //datatype
        required:true, //validate
    },
    weight:{
        type:String, //datatype
        required:true, //validate
    },
    delman:{
        type:String, //datatype
        required:true, //validate
    },
    delservice:{
        type:String, //datatype
        required:true, //validate
    },
    dispatchDate:{
        type:String, //datatype
        required:true, //validate
    },
    expectedDate:{
        type:String, //datatype
        required:true, //validate
    },
    status:{
        type: String,
        enum: ['processing','complete'],
        required: true
    }

});

module.exports = mongoose.model(
    "delivery", //file name
    deliverySchema //function name
)

