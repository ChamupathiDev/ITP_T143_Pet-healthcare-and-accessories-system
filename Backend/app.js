const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const multer = require("multer");
const dotenv = require ("dotenv");
const path = require('path');

const router = require("./Routes/PetProductRoutes");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;


app.use (cors());
app.use (bodyParser.json());

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
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

app.use("/products",router);

const URL = process.env.MONGODB_URL;


mongoose.connect(URL)

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb Connection Success!");
})





app.listen(PORT, () =>{
    console.log(`Server is up and running on port number: ${PORT}`)
})

