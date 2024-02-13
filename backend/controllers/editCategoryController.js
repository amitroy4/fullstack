const Category = require("../model/categorySchema");

const editCategoryController = async (req, res) => {
  const { name, id } = req.body;
  await Category.findByIdAndUpdate({ _id: id }, { name: name });
  res.send({ success: "Edited" });
};

module.exports = editCategoryController;
