import mongoose from "mongoose";
//const autoIncrement =require( 'mongoose-auto-increment');

const productSchema = new mongoose.Schema({
  brand_name: {
    type: String,
  },
  model: {
    type: String,
  },
  price: {
    type: String,
  },
  rating: {
    type: String,
  },
  has_5g: {
    type: String,
  },
  has_nfc: {
    type: String,
  },

  has_ir_blaster: {
    type: String,
  },
  processor_brand: {
    type: String,
  },
  num_cores: {
    type: String,
  },
  processor_speed: {
    type: String,
  },
  battery_capacity: {
    type: String,
  },
  fast_charging_available: {
    type: String,
  },
  fast_charging: {
    type: String,
  },
  ram_capacity: {
    type: String,
  },
  internal_memory: {
    type: String,
  },
  screen_size: {
    type: String,
  },
  refresh_rate: {
    type: String,
  },
  ram_capacity: {
    type: String,
  },
  resolution: {
    type: String,
  },
  num_rear_cameras: {
    type: String,
  },
  num_front_cameras: {
    type: String,
  },
  os: {
    type: String,
  },
  primary_camera_rear: {
    type: String,
  },
  primary_camera_front: {
    type: String,
  },
  extended_memory_available: {
    type: String,
  },
  extended_upto: {
    type: String,
  },
  ram_capacity: {
    type: String,
  },
  ram_capacity: {
    type: String,
  },
  ram_capacity: {
    type: String,
  },
  product_id: {
    type: String,
  },
  image_url: {
    type: String,
  },
});

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'product');

const Product = mongoose.model("ecommProduct", productSchema);

export default Product;
// import mongoose from "mongoose";
// //const autoIncrement =require( 'mongoose-auto-increment');

// const productSchema = new mongoose.Schema({
//   id: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   url: {
//     type: String,
//   },
//   detailUrl: {
//     type: String,
//   },
//   title: {
//     type: Object,
//   },
//   price: {
//     type: Object,
//   },
//   quantity: {
//     type: Number,
//   },
//   description: {
//     type: String,
//   },

//   tagline: {
//     type: String,
//   },
// });

// // autoIncrement.initialize(mongoose.connection);
// // productSchema.plugin(autoIncrement.plugin, 'product');

// const Product = mongoose.model("product", productSchema);

// export default Product;
