const mongoose = require('mongoose')
var seeder = require('mongoose-seed');
require('./schema.js');
const db = "mongodb://127.0.0.1:27017/FEC";

seeder.connect(db, function(){
    seeder.loadModels(['./database/schema.js'])
    seeder.clearModels(['Product'],
      (err, data)=> {
        if(err){
          return console.error(err)
        } else return console.log('clear Models successful');
    });
    seeder.populateModels(data, function(err, done){
      if(err){
        return console.error(err);
      } else if(done){
        return console.log('seed done', done);
      }
      seeder.disconnect();
    });
  });
  
  const data = [{
    'model': 'Product',
    'documents': [
      {
        "product_name": "Leather Sentry Watch",
        "product_price": "150",
        "product_rating": "4.3",
        "discount": false,
        "discounted_price": "125",
        "color": "All Black",
        "colors": ["All Black", "Red", "Blue", "Gold", "Silver"],
        "product_description": "Set to Stun. The Sentry Leather is an elegant timepiece with an adventurous side. Think black tie meets block party. The face pops with depth and detail, but with the solid stainless steel case, hardened mineral crystal, and waterproof rating of 100m, you don't have to worry about it not being able to hang in the real world.",
        "in_cart": false,
        "reviews_amount": "200",
        "questions_amount": "200",
       " product_size": "42",
        "product_serial": "A105-001-00",
        "product_url": "https://www.nixon.com/us/en/sentry-leather/A105.html",
        "images": ["https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa6af7a8f/products/A105-001-view1.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw5bb78558/products/A105-001-view2.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw1237bed6/products/A105-001-view3.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwf4db0ed4/products/A105-001-view5.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwc5cd7221/products/A105-001-life_1.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw369dded2/products/A105-001-life_2.jpg?sfrm=png"]
      },
      {
        "product_name": "Leather Sentry Watch",
        "product_price": "160",
        "product_rating": "2.3",
        "discount": true,
        "discounted_price": "125",
        "color": "Polished Gold/ Navy Sunray",
        "colors": ["All Black", "Red", "Blue", "Gold", "Silver", "Polished Gold / Navy Sunray"],
        "product_description": "Set to Stun. The Sentry Leather is an elegant timepiece with an adventurous side. Think black tie meets block party. The face pops with depth and detail, but with the solid stainless steel case, hardened mineral crystal, and waterproof rating of 100m, you don't have to worry about it not being able to hang in the real world.",
        "in_cart": false,
        "reviews_amount": "44",
        "questions_amount": "5",
       " product_size": "42",
        "product_serial": "A105-2687-00",
        "product_url": "https://www.nixon.com/us/en/sentry-leather/A105.html?dwvar_A105_color=3320&dwvar_A105_size=00",
        "images": ["https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw1ab9baa7/products/A105-2867-view1.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw776bc116/products/A105-2867-view2.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw776bc116/products/A105-2867-view2.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw776bc116/products/A105-2867-view2.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dweb0fe54d/products/A105-2867-life_1.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dweb0fe54d/products/A105-2867-life_1.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwebbd30dc/products/A105-2867-custom.jpg?sfrm=png"]
      },
      {
      "product_name": "Leather Sentry Watch",
        "product_price": "150",
        "product_rating": "3.8",
        "discount": false,
        "discounted_price": "125",
        "color": "All Gold/ Black",
        "colors": ["All Black", "Red", "Blue", "Gold", "Silver", "Polished Gold / Navy Sunray", "All Gold / Black"],
        "product_description": "Set to Stun. The Sentry Leather is an elegant timepiece with an adventurous side. Think black tie meets block party. The face pops with depth and detail, but with the solid stainless steel case, hardened mineral crystal, and waterproof rating of 100m, you don't have to worry about it not being able to hang in the real world.",
        "in_cart": false,
        "reviews_amount": "10",
        "questions_amount": "1",
       " product_size": "42",
        "product_serial": "A105-510-00",
        "product_url": "https://www.nixon.com/us/en/sentry-leather/A105.html?dwvar_A105_color=510&dwvar_A105_size=00",
        "images": ["https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw93baf180/products/A105-510-view1.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwe7a3d903/products/A105-510-view2.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw3afecc49/products/A105-510-view3.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwba3bb822/products/A105-510-view5.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw09b059d0/products/A105-510-life_1.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa0b2a822/products/A105-510-custom.jpg?sfrm=png"],
      },
      {
        "product_name": "Porter Watch",
          "product_price": "250",
          "product_rating": "4.5",
          "discount": true,
          "discounted_price": "175",
          "color": "All Black",
          "colors": ["All Black", "Red", "Blue", "Gold", "Silver", "Polished Gold / Navy Sunray", "All Gold / Black"],
          "product_description": "Tried and True. Giving you the first-class experience all the way, the Porter looks as good as it feels—in no particular order. Its sleek profile and sophisticated design sit comfortably in any scenario, in other words, it takes any outfit up to the highest level.",
          "in_cart": false,
          "reviews_amount": "75",
          "questions_amount": "12",
         " product_size": "40",
          "product_serial": "A1057-001-00",
          "product_url": "https://www.nixon.com/us/en/porter/A1057.html?dwvar_A1057_color=001#start=1",
          "images": ["https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw07f3fb4d/products/A1057-001-view1.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwe57f63e6/products/A1057-001-view2.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwe57f63e6/products/A1057-001-view2.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwf27389c0/products/A1057-001-view4.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw3b7b2b64/products/A1057-001-life_1.jpg?sfrm=png"],
        },
        {
          "product_name": "Porter Watch",
            "product_price": "250",
            "product_rating": "4.5",
            "discount": true,
            "discounted_price": "175",
            "color": "Black / Gold",
            "colors": ["All Black", "Red", "Blue", "Gold", "Silver", "Polished Gold / Navy Sunray", "Black / Gold"],
            "product_description": "Tried and True. Giving you the first-class experience all the way, the Porter looks as good as it feels—in no particular order. Its sleek profile and sophisticated design sit comfortably in any scenario, in other words, it takes any outfit up to the highest level.",
            "in_cart": false,
            "reviews_amount": "75",
            "questions_amount": "12",
           " product_size": "40",
            "product_serial": "A1057-010-00",
            "product_url": "https://www.nixon.com/us/en/porter/A1057.html?dwvar_A1057_color=010&dwvar_A1057_size=00",
            "images": ["https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa2f5e19e/products/A1057-010-view1.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwd6ce8a55/products/A1057-010-view2.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw439c3618/products/A1057-010-view3.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw0c1d4896/products/A1057-010-view4.jpg?sw=556&sh=680&sm=fit&sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw5ecb3622/products/A1057-010-life_1.jpg?sw=556&sh=680&sm=fit&sfrm=png"],
          },
          {
              "product_name": "Porter Watch",
              "product_price": "250",
              "product_rating": "4.5",
              "discount": true,
              "discounted_price": "175",
              "color": "All Black / Gold",
              "colors": ["All Black", "Red", "Blue", "Gold", "Silver", "Polished Gold / Navy Sunray", "Black / Gold", "All Black / Gold"],
              "product_description": "Tried and True. Giving you the first-class experience all the way, the Porter looks as good as it feels—in no particular order. Its sleek profile and sophisticated design sit comfortably in any scenario, in other words, it takes any outfit up to the highest level.",
              "in_cart": false,
              "reviews_amount": "75",
              "questions_amount": "12",
              "product_size": "40",
              "product_serial": "A1057-1031-00",
              "product_url": "https://www.nixon.com/us/en/porter/A1057.html?dwvar_A1057_color=1031&dwvar_A1057_size=00",
              "images": ["https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw8e7a6fba/products/A1057-1031-view1.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwf89029db/products/A1057-1031-view2.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw04d89060/products/A1057-1031-view3.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw685eeec8/products/A1057-1031-view4.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw957faae0/products/A1057-1031-life_1.jpg?sfrm=png"],
            },
            {
                "product_name": "Porter Watch",
                "product_price": "250",
                "product_rating": "4.5",
                "discount": true,
                "discounted_price": "175",
                "color": "All Rose Gold / Black",
                "colors": ["All Black", "Red", "Blue", "Gold", "Silver", "Polished Gold / Navy Sunray", "Black / Gold", "All Black / Gold",  "All Rose Gold / Black"],
                "product_description": "Tried and True. Giving you the first-class experience all the way, the Porter looks as good as it feels—in no particular order. Its sleek profile and sophisticated design sit comfortably in any scenario, in other words, it takes any outfit up to the highest level.",
                "in_cart": false,
                "reviews_amount": "75",
                "questions_amount": "12",
                "product_size": "40",
                "product_serial": "A1057-1932-00",
                "product_url": "https://www.nixon.com/us/en/porter/A1057.html?dwvar_A1057_color=1932&dwvar_A1057_size=00",
                "images": ["https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw62cc82b5/products/A1057-1932-view1.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw2244a199/products/A1057-1932-view2.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw3632a8f1/products/A1057-1932-view3.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwe8bb98cd/products/A1057-1932-view5.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw6365392e/products/A1057-1932-life_1.jpg?sfrm=png"],
              },
              {
                "product_name": "Porter Watch",
                "product_price": "250",
                "product_rating": "4.5",
                "discount": true,
                "discounted_price": "175",
                "color": "All Gold / White Sunray",
                "colors": ["All Black", "Red", "Blue", "Gold", "Silver", "Polished Gold / Navy Sunray", "Black / Gold", "All Black / Gold",  "All Rose Gold / Black", "All Gold / White Sunray"],
                "product_description": "Tried and True. Giving you the first-class experience all the way, the Porter looks as good as it feels—in no particular order. Its sleek profile and sophisticated design sit comfortably in any scenario, in other words, it takes any outfit up to the highest level.",
                "in_cart": false,
                "reviews_amount": "75",
                "questions_amount": "12",
                "product_size": "40",
                "product_serial": "A1057-2443-00",
                "product_url": "https://www.nixon.com/us/en/porter/A1057.html?dwvar_A1057_color=2443&dwvar_A1057_size=00",
                "images": ["https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwce81654f/products/A1057-2443-view1.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw62fddd24/products/A1057-2443-view2.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwca46ba99/products/A1057-2443-view3.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw3f64caf7/products/A1057-2443-view5.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwddf52f15/products/A1057-2443-life_1.jpg?sfrm=png"],
              },
              {
                "product_name": "Porter Watch",
                "product_price": "250",
                "product_rating": "4.5",
                "discount": true,
                "discounted_price": "175",
                "color": "All Gold / Blue Sunray",
                "colors": ["All Black", "Red", "Blue", "Gold", "Silver", "Polished Gold / Navy Sunray", "Black / Gold", "All Black / Gold",  "All Rose Gold / Black", "All Gold / White Sunray", "All Gold / Blue Sunray"],
                "product_description": "Tried and True. Giving you the first-class experience all the way, the Porter looks as good as it feels—in no particular order. Its sleek profile and sophisticated design sit comfortably in any scenario, in other words, it takes any outfit up to the highest level.",
                "in_cart": false,
                "reviews_amount": "75",
                "questions_amount": "12",
                "product_size": "40",
                "product_serial": "A1057-2735-00",
                "product_url": "https://www.nixon.com/us/en/porter/A1057.html?dwvar_A1057_color=2735&dwvar_A1057_size=00",
                "images": ["https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw4acae4df/products/A1057-2735-view1.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwaf0400a7/products/A1057-2735-view2.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw7879f475/products/A1057-2735-view3.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw1f896e1f/products/A1057-2735-view5.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwf1987307/products/A1057-2735-life_1.jpg?sfrm=png"],
              },
              {
                "product_name": "Porter Watch",
                "product_price": "250",
                "product_rating": "4.5",
                "discount": true,
                "discounted_price": "125",
                "color": "Navy",
                "colors": ["All Black", "Red", "Blue", "Gold", "Silver", "Polished Gold / Navy Sunray", "Black / Gold", "All Black / Gold",  "All Rose Gold / Black", "All Gold / White Sunray", "All Gold / Blue Sunray", "Navy"],
                "product_description": "Tried and True. Giving you the first-class experience all the way, the Porter looks as good as it feels—in no particular order. Its sleek profile and sophisticated design sit comfortably in any scenario, in other words, it takes any outfit up to the highest level.",
                "in_cart": false,
                "reviews_amount": "75",
                "questions_amount": "12",
               " product_size": "40",
                "product_serial": "A1057-307-00",
                "product_url": "https://www.nixon.com/us/en/porter/A1057.html?dwvar_A1057_color=2735&dwvar_A1057_size=00",
                "images": ["https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw49e54152/products/A1057-307-view1.jpg?sfrm=png","https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw0c445d34/products/A1057-307-view2.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwa7ec2b16/products/A1057-307-view3.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwcc6b99ef/products/A1057-307-view5.jpg?sfrm=png", "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwd9584548/products/A1057-307-life_1.jpg?sfrm=png"],
              },
    ]
  }]


/*

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

*/