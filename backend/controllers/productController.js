
let productController = (req, res) => {


        let { name, description } = req.body;

       console.log("Product",name, description);

};

module.exports = productController;
