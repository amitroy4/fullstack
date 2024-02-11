const express = require('express');
const _ = express.Router();
const categoryController = require('../../controllers/categoryController');
const category = require("../../model/categorySchema")

_.post("/createcategory", categoryController);
_.get("/allcreatecategory", async function (req,res){
let data = await category.find({}).populate("ownerId")
res.send(data)
});


module.exports = _;