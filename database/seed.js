const mongoose = require('mongoose')
const Product = require('./schema')
const Images = require('./schema')
let db = require('./index.js')

let sampleProductData = [
    {
        id: 1,
        product_name: "Porter Watch",
        product_price: 175,
        product_rating: 4.5,
        discount: false,
        discounted_price: null,
        colors: [{ color: "All Black" }, { color: "Black / Gold" }, { color: "All Black/Gold" }],
        product_description: "Tried and True. Giving you the first-class experience all the way, the Porter looks as good as it feels—in no particular order. Its sleek profile and sophisticated design sit comfortably in any scenario, in other words, it takes any outfit up to the highest level.",
        in_cart: false,
        product_size: [{ size: '40mm' }],
        product_serial: "A1057 - 001 - 00",
        product_url: "https://www.nixon.com/us/en/porter/A1057-001-00.html"
    },
    {
        id: 2,
        product_name: "Kensington Watch",
        product_price: 175,
        product_rating: 4.8,
        discount: false,
        discounted_price: null,
        colors: [{ color: "All Black Crystal" }, { color: "Rose Gold / White" }, { color: "Rose Gold / Black" }],
        product_description: "Hello, Gorgeous. Clean and simple design language, an updated take on heirloom styles.",
        in_cart: false,
        product_size: [{ size: '37mm' }],
        product_serial: "A099-1098-00",
        product_url: "https://www.nixon.com/us/en/kensington/A099.html?dwvar_A099_color=1879&dwvar_A099_size=00#start=1"
    },
    {
        id: 3,
        product_name: "Cape Leather Wallet",
        product_price: 35,
        product_rating: 4.8,
        discount: false,
        discounted_price: null,
        colors: [{ color: "Black" }, { color: "Saddle" }],
        product_description: "A 100% genuine leather wallet with embossed interior. Features easy access currency sleeve, mesh ID window, and custom metal logo rivet at front.",
        in_cart: false,
        product_size: [],
        product_serial: "C2962-747-00",
        product_url: "https://www.nixon.com/us/en/cape-leather-wallet/C2962.html?dwvar_C2962_color=000&dwvar_C2962_size=00"
    }
];

let seedSampleData = function () {
    Product.deleteMany({})
    .then(Product.insertMany(sampleProductData))
    .then(() => {
        console.log("seeded Products")
        mongoose.connection.close()
    })
    .catch(err => console.log(err));
};

seedSampleData();

// IMAGES ------------------------------------------------------------------------

let sampleImageData = [
    {
        image_id: 1,
        main_image: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw49e54152/products/A1057-307-view1.jpg?sfrm=png",
        image_storage: [ 
            {image: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa7ec2b16/products/A1057-307-view3.jpg?sw=556&sh=680&sm=fit&sfrm=png" },
            {image: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw0c445d34/products/A1057-307-view2.jpg?sw=556&sh=680&sm=fit&sfrm=png"}, 
            {image: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwd9584548/products/A1057-307-life_1.jpg?sfrm=png"} 
            ]
    },  
    {
        image_id: 2,
        main_image: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw5ad7fb2e/products/A099-1879-view1.jpg?sfrm=png",
        image_storage: [ 
            { image: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw6bf0ba9a/products/A099-1879-seeiton.jpg?sfrm=png" },
            { image: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw8d73d8b2/products/A099-1879-view3.jpg?sfrm=png"},
            { image: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw25d41c43/products/A099-1879-view2.jpg?sfrm=png"}
             ]
    },
    {
        image_id: 3,
        main_image: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwf0e112ee/products/C2962-000-view1.jpg?sfrm=png",
        image_storage: [ 
         { image: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw32b7ab97/products/C2962-000-view2.jpg?sfrm=png" },
        ,{ image: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw493d773a/products/C2962-000-life_1.jpg?sfrm=png"}
                    ]
    }
];

let seedImagesData = function () {
    Images.deleteMany({})
    .then(Images.insertMany(sampleImageData))
    .then(() => {
        console.log("seeded Images")
        mongoose.connection.close()
    })
    .catch(err => console.log(err));
};

seedImagesData();