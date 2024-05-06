const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const multer = require("multer");
const dotenv = require ("dotenv");
const path = require('path');
const twilio = require("twilio");

const router = require("./Routes/PetProductRoutes");
const disrouter = require("./Routes/DiscountRoutes");
const rerouter = require("./Routes/ReorderRoutes");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 5000;

//Middleware
app.use (cors());
app.use (bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use('/files', express.static('files'));
app.use("/products",router);
app.use("/discounts",disrouter);
app.use("/reorders",rerouter);



// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  });

  const upload = multer({ storage });

  // Set up a route for file uploads
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
  
    return res.status(200).json({ imageName: req.file.originalname, imageUrl: req.file.path });
  });

  const storagef = multer.diskStorage({
    destination: function(req,file,cb){
     return cb(null ,'./files')
    },
    filename: function(req,file,cb){
      const uniqueSuffix = Date.now();
      return cb(null,uniqueSuffix + file.originalname);
    },
  });
  
  //Insert model part
  require("./Model/ReportModel");
  const reportSchema = mongoose.model("inventoryreports");
  const uploadp = multer({storage: storagef});

  app.post('/uploadpfile', uploadp.single('file'), async(req,res)=>{
    console.log(req.file);
    const title = req.body.title;
    const fileName = req.file.filename;
    try{
      await reportSchema.create({title:title, pdf:fileName});
      console.log("pdf Uploaded successfully");
      res.send({ status: 200});
    }catch(err){
      console.log(err);
      res.status(500).send({ status: "error"});
    }
  })

  app.get("/getpfiles", async (req, res) => {
    try {
      reportSchema.find({}).then((data) => {
        res.send({ status: "ok", data: data });
      });
    } catch (error) {}
  });

  

  


const URL = process.env.MONGODB_URL;


mongoose.connect(URL)

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb Connection Success!");
})





app.listen(PORT, () =>{
    console.log(`Server is up and running on port number: ${PORT}`)
})

 