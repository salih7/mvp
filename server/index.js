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
  var listItem = { 
                    name: req.body.name,
                    email: req.body.email,
                    location: req.body.location,
                    work: req.body.work,
                    photoUrl: req.body.photoUrl
                 };
  items.insertOne(listItem, function(err, item) {
    if(err) {
      console.error('Some error occured inserting... ', err);
    } else {
      console.log('Inserted: ', item);
      res.status(201).send();
      //res.redirect(`/add-user/?name=${req.body.name}`);
      // items.selectAll(function(err, results) {
      //   if (err) {
      //     console.error('xxxxxxxxx error querying: ', err);
      //     res.status(201).send();
      //   } else {  
      //     console.log('Currently in database: ', results);
      //     res.status(201).send();
      //   }
      // });
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

