const subCategory = require("../model/subCategorySchema");

let allSubCategoryController = async (req, res) => {
  let subcategoryData = await subCategory.find({}).populate("subCategoryId");
  res.send(subcategoryData);

  console.log(subcategoryData);
};

module.exports = allSubCategoryController;
