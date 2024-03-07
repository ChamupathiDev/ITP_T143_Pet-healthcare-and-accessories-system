const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({

    name:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    stockAlertThreshold:{
        type: Number,
        required: true
    },

    reorderPoint:{
        type: Number,
        required: true
    },

    imageUrl:{
        type: String,
        required: true
    },

    category: {
        type: String
        
    }


});

module.exports = mongoose.model("PetProductModel", productSchema);