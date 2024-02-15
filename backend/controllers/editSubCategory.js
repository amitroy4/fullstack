const SubCategory = require("../model/subCategorySchema");

const editSubCategoryController = async (req, res) => {
  const { name, id } = req.body;
  await SubCategory.findByIdAndUpdate({ _id: id }, { name: name });
  res.send({ success: "Sub CategoryEdited" });
};

module.exports = editSubCategoryController;
