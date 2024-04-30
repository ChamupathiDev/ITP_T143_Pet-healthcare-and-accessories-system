const reqs = require("../Model/RequestModel");

//data display
const getAllRequest = async (req, res, next)=>{

    let request;

    try{
        request = await reqs.find();
    }catch(err){
        console.log(err);
    }
    //not found users
    if(!request){
        return res.status(404).json({message:"request not found"});
    }
    //Display all users
    return res.status(200).json({request});
};

//data Insert
const addRequest = async(req,res,next)=>{

    const {gmail,packid,issue} = req.body;

    let request;

    try{
        request = new reqs({gmail,packid,issue});
        await reqs.save();
    }catch(err){
        console.log(err);
    }
    //don't insert users
    if(!request){
        return res.status(404).json({message:"unable to add request"})
    }
    return res.status(200).json({request});
};
//Get by Id
const getById = async(req,res,next)=>{

    const id = req.params.id;

    let request;

    try{
        request = await reqs.findById(id);
    }catch(err){
        console.log(err);
                 
    }
    
    //not available users
    if(!request){
        return res.status(404).json({message:"tracking not found"})
    }
    return res.status(200).json({request});

}

//update User Details
const updateRequest = async(req,res,next)=>{

    const id = req.params.id;
    const {gmail,packid,issue}=req.body;

    let request;

    try{
        request = await reqs.findByIdAndUpdate(id,
            {gmail:gmail,packid:packid,issue:issue});
            request = await reqs.save();
    }catch(err){
        console.log(err);    
    }
    if(!request){
        return res.status(404).json({message:"unable to update tracking details"})
    }
    return res.status(200).json({request});

};

//delete user details 
const deleteRequest = async(req,res,next)=>{

    const id = req.params.id;
   

    let request;

    try{
        request = await reqs.findByIdAndDelete(id)
           
    }catch(err){
        console.log(err);    
    }
    if(!request){
        return res.status(404).json({message:"unable to delete tracking details"})
    }
    return res.status(200).json({request});

};


exports.getAllRequest = getAllRequest;
exports.addRequest = addRequest;
exports.getById = getById;
exports.updateRequest = updateRequest;
exports.deleteRequest = deleteRequest;