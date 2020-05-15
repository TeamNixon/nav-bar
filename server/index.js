let port = 1739;
let express = require('express');
let cors = require('cors');
let path = require('path');
let bodyParser = require('body-parser');
let controller = require('../database/index.js');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(cors());


app.get('http://localhost:1739/bundle.js', (req, res) => {
  if (err) {
    console.log(err)
  } 
  res.status(200).sendFile('../client/dist')
})

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


app.listen(port, function() {
  console.log(`FEC-Navbar project is now up and running on port ${port}!`);
});
