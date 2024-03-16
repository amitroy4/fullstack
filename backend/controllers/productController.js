const Products = require("../model/productSchema");

let productController = (req, res) => {
  let { name, description, variant } = req.body;

  console.log(variant);

  // res.send(`/uploads/${req.file.filename}`);

  // let product = new Products({
  //   name: name,
  //   description: description,
  //   variant: variant,
  //   image: `/uploads/${req.file.filename}`,
  // });

  // product.save();
  // console.log(product);
  // res.send("product created successful");
};

module.exports = productController;
