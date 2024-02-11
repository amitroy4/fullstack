const Category = require("../model/categorySchema")

let categoryController = async (req, res) => {
 const {name, ownerId} = req.body
//  console.log(name, ownerId);
 let category = new Category({
    name: name,
    ownerId: ownerId,
 });

 category.save()
 console.log(category);
};

module.exports = categoryController