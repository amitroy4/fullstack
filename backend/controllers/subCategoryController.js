const SubCategory = require("../model/subCategorySchema");

let subCategoryController = async (req, res) => {
  let { name, category } = req.body;

  let subCategory = new SubCategory({
    name: name,
    category: category,
  });
  subCategory.save();
};

module.exports = subCategoryController;
