const subCategory = require("../model/subCategorySchema");

let allSubCategoryController = async (req, res) => {
  let categoryData = await subCategory.find({}).populate("subCategoryId");
  res.send(categoryData);

  console.log(categoryData);
};

module.exports = allSubCategoryController;
