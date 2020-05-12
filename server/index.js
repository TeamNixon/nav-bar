let port = 1739;
let express = require('express');
const path = require('path');
let bodyParser = require('body-parser');
const controller = require('../database/index.js');

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
app.get('/api/navbar/incart/', (req, res) => {
  controller.getCartItem()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

app.listen(port, function() {
  console.log(`FEC project is now up and running on port ${port}!`);
});
