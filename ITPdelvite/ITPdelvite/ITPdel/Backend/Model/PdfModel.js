const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pdfSchema = new Schema({


    title:{
        type: String,
        required: true
    },

    pdf:{
        type: String,
        required: true
    },

    

    

});

module.exports = mongoose.model(
    "PdfDetails",
    pdfSchema
)