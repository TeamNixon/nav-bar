const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let productSchema = new Schema({
  id: {type: Number},
  product_name: {type: String, },
  product_price: {type: Number, },
  product_rating: {type: Number, },
  discount: {type: Boolean},
  discounted_price: {type: Number, },
  color: {type: String, },
  colors: [{type: String, }],
  product_description: {type: String, },
  in_cart: {type: Boolean, },
  reviews_amount: {type: Number, },
  questions_amount: {type: Number, },
  product_size: {type: Number, },
  product_serial: {type: String, },
  product_url: {type: String, },
  images: [{type: String, }],
});



let Product = mongoose.model('Product', productSchema);



// OMAR'S PRODUCT MODEL ===========================================================================
const productsSchemaR = new Schema({
  productId: Number,
  title: String,
  images: [String],
  reviews: [{type: Schema.Types.ObjectId, ref: 'Reviews'}]
});

const modelR = mongoose.model("productsR", productsSchemaR);

// OMAR'S REVIEW MODEL ===========================================================================
const reviewsSchema = new Schema({
  rating: Number,
  title: String,
  body: String,
  date: Date,
  name: String,
  style: {
    classic: Boolean,
    funky: Boolean,
    daily_wear: Boolean,
    sporty: Boolean
  },
  verified_purchase: Boolean,
  product_id: {type: Schema.Types.ObjectId},
  product_serial: String,
  image: String,
  likes: Number,
  dislikes: Number
});

const modelRR = mongoose.model("Reviews", reviewsSchema);

// module.exports = Product;
// module.exports = model;
module.exports = {
  Product: Product,
  modelR: modelR, // omar's product
  modelRR: modelRR // omar's reviews
};
