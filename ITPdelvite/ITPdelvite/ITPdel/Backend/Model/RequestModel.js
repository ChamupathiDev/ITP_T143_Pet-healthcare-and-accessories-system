const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    gmail:{
        type:String, //datatype
        required:true, //validate
    },
    packid:{
        type:String, //datatype
        required:true, //validate
    },
    issue:{
        type:String, //datatype
        required:true, //validate
    }
    
});

module.exports = mongoose.model(
    "requestform", //file name
    requestSchema //function name
)

