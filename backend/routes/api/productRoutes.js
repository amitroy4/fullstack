const express = require("express");
const _ = express.Router();
const categoryController = require("../../controllers/categoryController");
const category = require("../../model/categorySchema");

const subCategoryController = require("../../controllers/subCategoryController");
const allsubCategoryController = require("../../controllers/allSubCategoryController");

const productController = require("../../controllers/productController");
const allCategoryController = require("../../controllers/allCategoryController");
const deletecategoryController = require("../../controllers/deleteCategory");
const editCategoryController = require("../../controllers/editCategoryController");
const deletesubcategoryController = require("../../controllers/deleteSubCategory");
const editSubCategoryController = require("../../controllers/editSubCategory");

_.post("/createcategory", categoryController);
_.get("/allcategory", allCategoryController);
_.post("/deletecategory", deletecategoryController);
_.post("/editcategory", editCategoryController);

_.post("/subcategory", subCategoryController);
_.get("/allsubcategory", allsubCategoryController);
_.post("/deletesubcategory", deletesubcategoryController);
_.post("/editsubcategory", editSubCategoryController);
_.post("/products", productController);

module.exports = _;
