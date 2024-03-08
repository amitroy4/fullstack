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
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  variant: [varientSchema],
});

module.exports = mongoose.model("Product", productSchema);
