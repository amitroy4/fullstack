const mongoose = require("mongoose");

const { Schema } = mongoose;
const varientValueSchema = new Schema({
  name: String,
  stock: Number,
});
const varientSchema = new Schema({
  name: String,
  value: [varientValueSchema],
});

const productSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  variant: [varientSchema],
});

module.exports = mongoose.model("Product", productSchema);
