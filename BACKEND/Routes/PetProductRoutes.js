const express = require("express");
const router = express.Router();
//Insert Model
const product = require("../Model/PetProductModel");
//Insert product Controller
const PetProductController = require("../Controllers/PetProductController");

router.get("/getAll",PetProductController.getAllproducts);

module.exports = router;
