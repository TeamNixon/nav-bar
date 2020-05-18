var mongoose = require('mongoose');
var mongoUri = 'mongodb://mongo:27018/FEC';
var db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let Product = require('./schema.js')

let controllers = {
  getAll: () => Product.find({}),
  search: (query) =>
  Product.find({ product_name: { $regex: query, $options: 'i' } }),
  // Product.find( {
  //     $or : [ {product_size: query }, {product_price: query} ]
  // })
  getCartItem: () => Product.find({ in_cart: true }),
};

module.exports = controllers;
