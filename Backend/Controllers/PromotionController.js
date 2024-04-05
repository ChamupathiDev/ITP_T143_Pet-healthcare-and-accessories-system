const promotion = require("../Model/PromotionModel");
//data display
const getAllpromotions = async(req, res, next) =>{

    let promotions;

    try{
        promotions = await promotion.find();
    }catch (err){
        console.log(err);
    }
    //not found
    if(!promotions){
        return res.status(404).json({message:"Promotion not found"});
    }
    //Display all promotions
    return res.status(200).json({promotions});

};

//data insert
const addpromotions = async (req, res, next) =>{

    const {name, type, startDate, endDate} = req.body;

    let promotions;

    try{
        promotions = new promotion({name, type, startDate, endDate});
        await promotions.save();
    } catch (err){
        console.log(err);
    }

    //not insert promotions
    if(!promotions){
        return res.status(404).send({message: "unable to add promotions"});
    }
    return res.status(200).json({promotions})
};

//Get by Id
const getById = async (req, res, next) => {
    const id = req.params.id;

    let promotions;

    try{
        promotions = await promotion.findById(id);
    }catch(err){
        console.log(err);

    }
// not available promotions
    if(!promotions){
        return res.status(404).send({message: "promotion not found"});
    }
    return res.status(200).json({promotions})
};

//update promotion details
const updatePromotion = async (req, res, next) =>{

    const id = req.params.id;
    const {name, type, startDate, endDate} = req.body;

    let promotions;

    try{
        promotions = await promotion.findByIdAndUpdate(id, {name: name, type:type, startDate:startDate, endDate:endDate});
        promotions = await promotions.save();
    } catch(err){
        console.log(err);
    }

    //not update promotion
    if(!promotions){
        return res.status(404).send({message: "promotion not update"});
    }
    return res.status(200).json({promotions})

};

//Delete promotion details
const deletePromotion = async (req, res, next) =>{

    const id = req.params.id;

    let promotions;

    try{
        promotions = await promotion.findByIdAndDelete(id);
    }catch (err){

        console.log(err);
    }

    //not delete promotion
    if(!promotions){
        return res.status(404).send({message: "promotion not delete"});
    }
    return res.status(200).json({promotions})

};


exports.getAllpromotions=getAllpromotions;
exports.addpromotions=addpromotions;
exports.getById=getById;
exports.updatePromotion=updatePromotion;
exports.deletePromotion=deletePromotion;