const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reorderSchema = new Schema({

    prid:{
        type: String,
        required: true,
        unique: true
    },

    name:{
        type: String,
        required: true
    },

    reorderQuantity:{
        type: String,
        required: true,
        min: [0, "Reorder Quantity cannot be negative"]
    },

    supplierName: {
        type: String,
        required: true
    },

    supplierNo: {
        type: Number,
        required: true,
        validate: {
            validator: function(supplierNo) {
              const phonePattern = /^\d{10}$/; // Assumes a 10-digit phone number
              return phonePattern.test(supplierNo);
            },
            message: "Invalid supplier phone number format",
          },
    }

});

module.exports = mongoose.model("reorder",reorderSchema);