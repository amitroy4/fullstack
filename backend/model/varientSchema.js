const mongoose = require("mongoose");

const { Schema } = mongoose;

const varientSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  regularprice: {
    type: String,
  },
  salesprice: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("Varient", varientSchema);
