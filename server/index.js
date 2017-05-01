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

// app.get('/*', function(req, res) {
//   console.log('*************');
//   console.log('>>>>body>>>>', req.body);
//   console.log('>>>>query>>>', req.query);
//   res.status(200).send();
// });

app.get('/add-user', function(req, res) {
  console.log('*****************************');
  // if(req.query) {

  // }
  items.selectAll(function(err, results) {
    if(err) {
      console.log(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/', function (req, res) {
  console.log('Req body contains: ', req.body);
  // var listItem = { 
  //                   name: req.body.name,
  //                   email: req.body.email,
  //                   location: req.body.location,
  //                   work: req.body.work,
  //                   photoUrl: req.body.photoUrl
  //                };
  var updateInfo = {};
  
  req.body.name ? updateInfo.name = req.body.name : null;
  req.body.email ? updateInfo.email = req.body.email : null;
  req.body.location ? updateInfo.location = req.body.location : null;
  req.body.work ? updateInfo.work = req.body.work : null;
  req.body.photoUrl ? updateInfo.photoUrl = req.body.photoUrl : null;

  if(req.body.name) {
    items.update({ name: req.body.name }, updateInfo, function(err, item) {
      if(err) {
        console.error('Some error occured updating... ', err);
      } else {
        console.log('Updated successfully!');
        res.status(201).send();
      }
    });
  }
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

