let SubCategory = require("../model/subCategorySchema");

const deletesubcategoryController = async (req, res) => {
  console.log("hello");
  let { id } = req.body;

  let category = await SubCategory.findByIdAndDelete({ _id: id });
  res.send({ success: "SubCategory Delete Successful" });
};

module.exports = deletesubcategoryController;
