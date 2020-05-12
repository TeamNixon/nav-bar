var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/FEC';
var db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
const Product = require('./schema.js')


let controllers = {
    getAll: ()=>(
        Product.find({})
    ),
    search: (query) => (
        Product.find( {"product_name": {$regex: query, $options: "i"} } )
        // Product.find( {
        //     $or : [ {product_name: { $regex: query, $options: "i"} }, {product_price: query} ]
        // })
    ),
    getCartItem: () => (
        Product.find({in_cart: true})
    )
}

module.exports = controllers;
