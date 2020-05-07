const mongoose = require('mongoose')
const Schema = mongoose.Schema;


let product = new Schema({
    id: Number,
    product_name: String,
    product_price: Number,
    product_rating: Number,
    discount: Boolean,
    discounted_price: Number,
    colors: [ { color: String } ],
    product_description: String,
    in_cart: Boolean,
    product_sizes: [ { size: String } ],
    product_serial: String,
    product_url: String
})

let images = new Schema({
    image_id: Number,
    main_image: String,
    image_storage: [ { image: String } ]
})


let Product = mongoose.model('Product', product)
let Images = mongoose.model('Images', images)

module.exports = Product
// module.exports = Images