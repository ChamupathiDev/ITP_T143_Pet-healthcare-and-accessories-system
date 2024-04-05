const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const promotionSchema = new Schema({

    name:{
        type: String,
        required: true
    },

    type:{
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

module.exports = mongoose.model("petpromotion",promotionSchema);