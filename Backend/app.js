const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const userDataRouter = require("./Routes/Display Data Routes");
const otpRouter = require("./Routes/Display Otp Route");
const petRouter = require("./Routes/Display Pet Route");
const employeesRouter = require("./Routes/Display Employee Routes");
const path = require('path');

const app = express();
const cors = require("cors");
const port = process.env.port || 5000;


// Connect Middleware
app.use(express.json());
app.use(cors());
app.use("/users", userDataRouter);
app.use("/otps", otpRouter);
app.use("/pets", petRouter);
app.use("/employees", employeesRouter);
app.use('/profileimage', express.static('profileimage'));


// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'profileimage/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  });

  const upload = multer({ storage });

  // Set up a route for file uploads
app.post('/profileimage', upload.single('image'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
  
    return res.status(200).json({ imageName: req.file.originalname, imageUrl: req.file.path });
  });

mongoose
  .connect("mongodb+srv://itp143project:PROJECT143@cluster0.pxkujdn.mongodb.net/petpulse")
  .then(() => console.log("Database Connected Successfully..."))
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
