const express = require('express');
const _ = express.Router();
const categoryController = require('../../controllers/categoryController');
const category = require("../../model/categorySchema")

const subCategoryController = require("../../controllers/subCategoryController");
const allsubCategoryController = require("../../controllers/allSubCategoryController");

_.post("/createcategory", categoryController);
_.get("/allcreatecategory", async function (req,res){
let data = await category.find({}).populate("ownerId")
res.send(data)
});

_.post("/subcategory", subCategoryController);
_.get("/allsubcategory", allsubCategoryController);

module.exports = _;