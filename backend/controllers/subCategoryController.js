const SubCategory = require("../model/subCategorySchema");

let subCategoryController = async (req, res) => {
  let { name, category } = req.body;

  let subCategory = new SubCategory({
    name: name,
    category: category,
  });
  subCategory.save();
  console.log(subCategory);
  res.send({ success: "Subcategory Created Successfully" });
};

module.exports = subCategoryController;
