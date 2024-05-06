const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const discountSchema = new Schema({

    psid:{
        type: String,
        required: true
    },

    name:{
        type: String,
        required: true
    },

    ptype:{
        type: String,
        required: true
    },

    type:{
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    applicableProduct: {
        type: String,
        required: true
    },

    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    }

});

module.exports = mongoose.model("petdiscount",discountSchema);