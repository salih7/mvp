var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  name: { type: String, unique: true },
  photoUrl: String,
  email: String,
  location: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var selectOne = function(user, callback) {
  Item.find(user, function(err, item) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, item)
    }
  });
};

var insertOne = function(item, callback) {
  var listItem = new Item(item);
  listItem.save(function(err) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, listItem);
    }
  });
};

var removeAll = function(callback) {
  Item.find({})
    .remove()
    .exec(function(err, items) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, items);
      }
    });
};

module.exports.selectAll = selectAll;

module.exports.insertOne = insertOne;

module.exports.removeAll = removeAll;