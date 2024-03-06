const Category = require("../model/categorySchema");

const approveCategoryController = async (req, res) => {
  const { isActive, id } = req.body;
  await Category.findByIdAndUpdate({ _id: id }, { isActive: isActive });
  res.send({ success: "Approved" });
};

module.exports = approveCategoryController;
