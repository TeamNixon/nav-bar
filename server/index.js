let port = 1739;
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let controller = require('../database/index.js');
const Product = require('../database/schema.js'); // route for rylan's API routes
// OMAR'S ROUTES 
const ObjectID = require('mongodb').ObjectID;
const database = require("../database/schema.js");

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/dist')));


app.get('/api/navbar/all/', (req, res) => {
  controller.getAll()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});


app.get('/api/navbar/search/:query', (req, res) => {
  let query = req.params.query;
  controller.search(query)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

app.get('/api/navbar/search/:query', (req, res) => {
  let query = req.params.query;
  controller.search(query)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

app.get('/api/navbar/incart/', (req, res) => {
  controller.getCartItem()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});


// RYLAN'S ROUTES ---------------------------------------
app.get('/:product_serial', (req, res) => {
  const serial = req.params.product_serial;
  console.log(req.params);
  console.log(serial);
  // A1057-307-00
  const query = {
    product_serial: `${serial}` };
    database.Product.findOne(query, (err, result) => {
    if (err) { console.error(err); }
     console.log(serial, "product", result, "result")
    res.status(200).send(result);
  });
});

app.get('/api/:product_serial', (req, res) => {
  const serial = req.params.product_serial;
  console.log(req.params);
  console.log(serial);
  // A1057-307-00
  const query = {
    product_serial: `${serial}` };
  database.Product.findOne(query, (err, result) => {
    if (err) { console.error(err); }
     console.log(serial, "product", result, "result")
    res.status(200).send(result);
  });
});

app.get('/api/product/:product_name', (req, res) => {
  let name = req.params.product_name;
  // console.log(Product);
  // console.log(req.params);
  // console.log(name);
  // replace the hyphens from params with a space for query
  name = name.replace(/-/g, ' ');
  const query = { product_name: `${name}` };
  console.log(query);
  database.Product.find(query, (err, result) => {
    if (err) { console.error(err); }
    console.log(name, 'name', result, 'results');
    res.status(200).send(result);
  });
});


app.post('/api/:product_serial', (req, res)=>{
  const serial = req.params.product_serial;
  const queryGet = {
    product_serial: `${serial}` };
  const queryAddToCart = {
    $set: {in_cart: true} };
    database.Product.findOneAndUpdate(queryGet, queryAddToCart, (err, result) => {
    if (err) { console.error(err); }
     //console.log(result, "result");
    res.status(200).send(result);
  });
});



// OMAR'S API ROUTES =============================================================

app.get('/api/product', async (req, res, next) => {
  try {
      const products = await database.modelR.find({})
      .populate('reviews');
      res.json({
          products: products
      });
  } catch (e) {
      console.log("Database error getting products", e);
      res.status(500).json({message: "Unable to get products!"});
  }
})

app.get('/api/product/:id', async (req, res, next) => {
  try {
      const product = await database.modelR.findOne({_id: ObjectID(req.params.id)});
      res.json({
          product: product
      });
  } catch (e) {
      console.log("Database error getting product", e);
      res.status(500).json({message: "Unable to get product!"});
  }
})

app.get('/api/reviews/:productid', async (req, res, next) => {
  const pageSize = 10;
  try {
      console.log("Getting all reviews for product", req.params.productid);
      let query = {
          product_id: ObjectID(req.params.productid)
      };
      if (req.query.levels) {
          let levels = req.query.levels.split(",").map(level => {
              return parseInt(level);
          });
          query.rating = {
              $in: levels
          };
      }
      console.log("Querying by", query);
      const total = await database.modelRR.count(query);
      const reviews = await database.modelRR.find(query)
      .limit(pageSize)
      .skip(parseInt(req.query.page || 0) * 10)
      .sort([['date', -1]])
      .exec();
      res.json({
          reviews: reviews,
          total: total
      });
  } catch (e) {
      console.log("Database error getting reviews", e);
      res.status(500).json({message: "Unable to get reviews!"});
  }
})

app.get('/api/rankings/:id', async (req, res, next) => {
  try {
      let rankings = await database.modelRR.aggregate([
          {
              $match: {
                  'product_id': ObjectID(req.params.id)
              }
          },
          {
              $group: {
                  _id: '$rating',
                  count: { $sum: 1 }
              }
          }
      ]);
      let total = rankings.reduce((total, ranking) => {
          return total + ranking.count;
      }, 0);
      let rankingsLookup = {};
      [5,4,3,2,1].forEach(level => {
          rankingsLookup[String(level)] = {
              level: level,
              pct: 0,
              count: 0
          }
      });
      rankings.forEach(ranking => {
          ranking.level = parseInt(ranking._id);
          delete ranking._id;
          ranking.pct = (100 * ranking.count / total);
          rankingsLookup[String(ranking.level)] = ranking;
      });
      rankings = Object.values(rankingsLookup);
      // Sort rankings in descending order
      rankings.sort((a, b) => {
          return b.level - a.level;
      });
      res.json({
          rankings: {
              total: total,
              overallRating: (rankings.reduce((total, ranking) => {
                  return total + (ranking.level * ranking.count);
              }, 0) / total),
              breakdowns: rankings
          }
      });
  } catch (e) {
      console.log("Database error getting rankings", e);
      res.status(500).json({message: "Unable to get rankings!"});
  }
})

app.post('/api/reviews/:productid', async (req, res, next) =>{
  let reviews_body = req.body;
  reviews_body.date = new Date();
  reviews_body.product_id = ObjectID(req.params.productid);
  try {
      let saved = await database.modelRR.create(reviews_body);
      if (!saved) {
        throw {
            message: "Unable to save"
        };
      }
      res.status(201).json({message: "Review successfully saved", review: saved});
  } catch (e) {
      console.log("Error saving review", e);
      return res.status(400).json({message: 'unable to save reviews try again'});
  }
})

app.post('/api/reviewlike/:id', async (req, res, next) => {
  try {
      let review = await database.modelRR.findOne({
          _id: ObjectID(req.params.id)
      });
      review.likes++;
      let result = await database.modelRR.update({_id: ObjectID(req.params.id)}, {
          likes: review.likes
      });
      console.log(result);
      res.json({success: true});
  } catch (e) {
      console.log("Database error liking review!", e);
      res.status(500).json({message: 'Unable to like review'});
  }
})

app.post('/api/reviewdislike/:id',  async (req, res, next) => {
  try {
      let review = await database.modelRR.findOne({
          _id: ObjectID(req.params.id)
      });
      review.dislikes++;
      await database.modelRR.update({_id: ObjectID(req.params.id)}, {
          dislikes: review.dislikes
      });
      res.json({success: true});
  } catch (e) {
      console.log("Database error disliking review!", e);
      res.status(500).json({message: 'Unable to dislike review'});
  }
})

app.listen(port, function() {
  console.log(`FEC-Navbar project is now up and running on port ${port}!`);
});
