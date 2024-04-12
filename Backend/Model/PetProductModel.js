const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({

    name:{
        type: String,
        required: true
    },

    image:{
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

    quantity:{
        type: Number,
        required: true
    },


    manufactureDate:{
        type: String,
        required: true
    },

    expireDate:{
        type: String,
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

    

    category: {
        type: String
        
    },

    brand: {
        type: String
        
    }


});

module.exports = mongoose.model("petproduct", productSchema);
