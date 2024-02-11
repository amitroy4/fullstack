const Products = require("../model/productSchema");


let productController = (req, res) => {
    let { name,image, description, rating, status, regularprice, price, brand } = req.body;

    let product = new Products({

    name: name,
    image: image,
    description: description,
    price: price,
    regularprice: regularprice,
    rating: rating,
    status: status,
    brand: brand,

    });

    product.save();
    console.log(product);

};

module.exports = productController;
