const product = require("../Model/PetProductModel");
//data display
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

//data insert
const addproducts = async (req, res, next) =>{

    const {name, description, price, stockAlertThreshold, reorderPoint, imageUrl, category} = req.body;

    let products;

    try{
        products = new product({name, description, price, stockAlertThreshold, reorderPoint, imageUrl, category});
        await products.save();
    } catch (err){
        console.log(err);
    }

    //not insert products
    if(!products){
        return res.status(404).send({message: "unable to add products"});
    }
    return res.status(200).json({products})
};

//Get by Id
const getById = async (req, res, next) => {
    const id = req.params.id;

    let products;

    try{
        products = await product.findById(id);
    }catch(err){
        console.log(err);

    }
// not available products
    if(!products){
        return res.status(404).send({message: "product not found"});
    }
    return res.status(200).json({products})
};

//update product details
const updateProduct = async (req, res, next) =>{

    const id = req.params.id;
    const {name, description, price, stockAlertThreshold, reorderPoint, imageUrl, category} = req.body;

    let products;

    try{
        products = await product.findByIdAndUpdate(id, {name: name, description: description, price: price, stockAlertThreshold: stockAlertThreshold, reorderPoint: reorderPoint, imageUrl: imageUrl,
        category: category});
        products = await products.save();
    } catch(err){
        console.log(err);
    }

    //not update product
    if(!products){
        return res.status(404).send({message: "product not update"});
    }
    return res.status(200).json({products})

};

//Delete product details
const deleteProduct = async (req, res, next) =>{

    const id = req.params.id;

    let products;

    try{
        products = await product.findByIdAndDelete(id);
    }catch (err){

        console.log(err);
    }

    //not delete product
    if(!products){
        return res.status(404).send({message: "product not delete"});
    }
    return res.status(200).json({products})

};





exports.getAllproducts = getAllproducts;
exports.addproducts = addproducts;
exports.getById = getById;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;

