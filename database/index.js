var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/FEC';
var db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const database = require("./schema.js");
// const Product = require('./schema.js');
let controllers = {
  getAll: () => database.Product.find({}),
  search: (query) =>
  database.Product.find({ product_name: { $regex: query, $options: 'i' } }),
  // Product.find( {
  //     $or : [ {product_size: query }, {product_price: query} ]
  // })
  getCartItem: () => database.Product.find({ in_cart: true }),
};

module.exports = controllers;
