import mongoose from "mongoose";
//const autoIncrement =require( 'mongoose-auto-increment');

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
  },
  detailUrl: {
    type: String,
  },
  title: {
    type: Object,
  },
  price: {
    type: Object,
  },
  quantity: {
    type: Number,
  },
  description: {
    type: String,
  },

  tagline: {
    type: String,
  },
});

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'product');

const Product = mongoose.model("product", productSchema);

export default Product;
