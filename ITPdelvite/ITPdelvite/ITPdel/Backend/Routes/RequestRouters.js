const express = require("express");

const router2 = express.Router();
//Insert Model
const reqs = require("../Model/RequestModel");
//Insert User Controller
const requestControler = require("../Controlers/RequestControlers");

router2.get("/", requestControler.getAllRequest);
router2.post("/", requestControler.addRequest);
router2.get("/:id",requestControler.getById);
router2.put("/:id", requestControler.updateRequest);
router2.delete("/:id", requestControler.deleteRequest);


module.exports = router2;
