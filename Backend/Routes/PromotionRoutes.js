const express = require("express");
const promorouter = express.Router();

//Insert Model
const promotion = require("../Model/PromotionModel");

//Insert promotion Controller
const PromotionController = require("../Controllers/PromotionController");

promorouter.get("/getAll",PromotionController.getAllpromotions);
promorouter.post("/add",PromotionController.addpromotions);
promorouter.get("/:id",PromotionController.getById);
promorouter.put("/:id",PromotionController.updatePromotion);
promorouter.delete("/:id",PromotionController.deletePromotion);



module.exports = promorouter;