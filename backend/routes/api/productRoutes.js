const express = require("express");
const _ = express.Router();
const categoryController = require("../../controllers/categoryController");
const category = require("../../model/categorySchema");

const subCategoryController = require("../../controllers/subCategoryController");
const allsubCategoryController = require("../../controllers/allSubCategoryController");

const productController = require("../../controllers/productController");
const allCategoryController = require("../../controllers/allCategoryController");

_.post("/createcategory", categoryController);
_.get("/allcategory", allCategoryController);

_.post("/subcategory", subCategoryController);
_.get("/allsubcategory", allsubCategoryController);

_.post("/products", productController);

module.exports = _;
