const express = require("express");
const router = express.Router();
//Insert Model
const product = require("../BACKEND/Model/PetProductModel");
//Insert product Controller
const PetProductController = require("../BACKEND/Controllers/PetProductController");

router.get("/",PetProductController.getAllproducts);

module.exports = router;