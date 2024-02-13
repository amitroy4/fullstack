let Category = require("../model/categorySchema");

const deletecategoryController = async (req, res) => {
  console.log("hello");
  let { id } = req.body;

  let category = await Category.findByIdAndDelete({ _id: id });
  res.send({ success: "Category Delete Successful" });
};

module.exports = deletecategoryController;
