// pass = r5e06IJ47auTfyXj

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/DeliveryRouters");
const router1 = require("./Routes/TrackingRouter");
const router2 = require("./Routes/RequestRouters");
const router3 = require("./Routes/DelayRouters");


const app = express();
const cors = require("cors");

//Middle ware

app.use(express.json());
app.use(cors());
app.use("/delivery",router);
app.use("/tracking",router1);
app.use("/requestform",router2);
app.use("/delay",router3);
app.use("/files",express.static("files"));

mongoose.connect("mongodb+srv://itp143project:PROJECT143@cluster0.pxkujdn.mongodb.net/petpulse?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=> console.log((err)));

//PDF ----
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },
  });

  //Insert Model part
require("./Model/PdfModel");
const pdfSchema = mongoose.model("PdfDetails");
const upload = multer({storage})

app.post("/uploadfile",upload.single("file"),async(req,res)=>{
  console.log(req.file); 
  const title = req.body.title; 
  const pdf = req.file.filename; // Corrected to req.file.filename
  
  try{
    
    await pdfSchema.create({title:title,pdf:pdf});
    console.log("pdf Uploaded successfully");
    res.send({status:200});

}catch(err){
    console.log(err);
    res.status(500).send({status:"error"});
}

});

app.get("/getFile",async(req,res)=>{
  try{
    const data = await pdfSchema.find({});
    res.send({status:200,data:data});
  }catch(err){
    console.log(err);
    res.status(500).send({status:"error"});

  }
})





