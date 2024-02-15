const subCategory = require("../model/subCategorySchema");

let allSubCategoryController = async (req, res) => {
  let subcategoryData = await subCategory.find({}).populate("category");
  res.send(subcategoryData);

  console.log(subcategoryData);
};

module.exports = allSubCategoryController;
