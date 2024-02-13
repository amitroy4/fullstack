const category = require("../model/categorySchema");

const allCategoryController = async function (req, res) {
  let data = await category.find({}).populate("ownerId");
  res.send(data);
};

module.exports = allCategoryController;
