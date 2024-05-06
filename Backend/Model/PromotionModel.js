const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const promotionSchema = new Schema({

    pmid:{
        type: String,
        required: true
    },

    name:{
        type: String,
        required: true
    },

    type:{
        type: String,
        required: true
    },

    startDate: {
        type: String,
        required: true
    },

    endDate: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("petpromotion",promotionSchema);