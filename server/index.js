var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.post('/', function (req, res) {
  //console.log('Req body contains: ', req.body);
  var listItem = { quantity: 1,  description: req.body.item };
  items.insertOne(listItem, function(err, item) {
    if(err) {
      console.error('Some error occured inserting... ', err);
    } else {
      console.log('Inserted: ', item);
      items.selectAll(function(err, results) {
        if (err) {
          console.error('xxxxxxxxx error querying: ', err);
          res.status(201).send();
        } else {  
          console.log('Currently in database: ', results);
          res.status(201).send();
        }
      });
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

