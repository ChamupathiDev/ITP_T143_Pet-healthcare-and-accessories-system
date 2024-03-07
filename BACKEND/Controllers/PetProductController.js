const product = require("../Model/PetProductModel");

const getAllproducts = async(req, res, next) =>{

    let products;

    try{
        products = await product.find();
    }catch (err){
        console.log(err);
    }
    //not found
    if(!products){
        return res.status(404).json({message:"Product not found"});
    }
    //Display all products
    return res.status(200).json({products});

};

exports.getAllproducts = getAllproducts;