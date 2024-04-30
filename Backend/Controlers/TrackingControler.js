const track = require("../Model/TrackingModel");

//data display
const getAllTracking = async (req, res, next)=>{

    let tracking;

    try{
        tracking = await track.find();
    }catch(err){
        console.log(err);
    }
    //not found tracking
    if(!tracking){
        return res.status(404).json({message:"tracking not found"});
    }
    //Display all tracking
    return res.status(200).json({tracking});
};

//data Insert
const addTracking = async(req,res,next)=>{

    const {name,status1,date1,status2,date2,status3,date3} = req.body;

    let tracking;

    try{
        tracking = new track({name,status1,date1,status2,date2,status3,date3});
        await tracking.save();
    }catch(err){
        console.log(err);
    }
    //don't insert tracking
    if(!track){
        return res.status(404).json({message:"unable to add tracking"})
    }
    return res.status(200).json({tracking});
};
//Get by Id
const getById = async(req,res,next)=>{

    const id = req.params.id;

    let tracking;

    try{
        tracking = await track.findById(id);
    }catch(err){
        console.log(err);
                 
    }
    
    //not available tracking
    if(!track){
        return res.status(404).json({message:"tracking not found"})
    }
    return res.status(200).json({tracking});

}

//update tracking Details
const updateTracking = async(req,res,next)=>{

    const id = req.params.id;
    const {name,status1,date1,status2,date2,status3,date3}=req.body;

    let tracking;

    try{
        tracking = await track.findByIdAndUpdate(id,
            {name:name,status1:status1,date1:date1,status2:status2,date2:date2,status3:status3,
                date3:date3});
                tracking = await track.save();
    }catch(err){
        console.log(err);    
    }
    if(!tracking){
        return res.status(404).json({message:"unable to update tracking details"})
    }
    return res.status(200).json({tracking});

};

//delete tracking details 
const deleteTracking = async(req,res,next)=>{

    const id = req.params.id;
   

    let tracking;

    try{
        tracking = await track.findByIdAndDelete(id)
           
    }catch(err){
        console.log(err);    
    }
    if(!tracking){
        return res.status(404).json({message:"unable to delete tracking details"})
    }
    return res.status(200).json({tracking});

};


exports.getAllTracking = getAllTracking;
exports.addTracking = addTracking;
exports.getById = getById;
exports.updateTracking = updateTracking;
exports.deleteTracking = deleteTracking;