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
const approveCategoryController = require("../../controllers/approveCategoryController");
const createStoreController = require("../../controllers/createStoreController");
const allStoreController = require("../../controllers/allStoreController");
const multer = require("multer");
const allProductController = require("../../controllers/allProducts");
const varientSchema = require("../../model/varientSchema");
const varientController = require("../../controllers/varientController");
const secureApi = require("../../middleware/secureApi");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

_.post("/createcategory", secureApi, categoryController);
_.get("/allcategory", allCategoryController);
_.post("/deletecategory", deletecategoryController);
_.post("/editcategory", editCategoryController);
_.post("/approvecategory", approveCategoryController);

_.post("/subcategory", subCategoryController);
_.get("/allsubcategory", allsubCategoryController);
_.post("/deletesubcategory", deletesubcategoryController);
_.post("/editsubcategory", editSubCategoryController);
_.post("/products", upload.single("avatar"), productController);
_.post("/varient", upload.single("vavatar"), varientController);
_.get("/allproducts", allProductController);

_.post("/createstore", createStoreController);
_.get("/allstore/:id", allStoreController);

module.exports = _;
