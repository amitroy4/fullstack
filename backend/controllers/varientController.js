const Varient = require("../model/varientSchema");

let varientController = (req, res) => {
  let { name, productId } = req.body;

  console.log(req.file);

  let varient = new Varient({
    name: name,
    productId: productId,
    image: `/uploads/${req.file.filename}`,
  });

  varient.save();
  console.log(varient);
  //   res.send(`/uploads/${req.file.filename}`);
  res.send("varient created successful");
};

module.exports = varientController;
