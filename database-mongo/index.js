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
  location: String,
  work: String
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

var insertMany = function(collectionArray, callback) {
  Item.collection.insert(collectionArray, function(err, docs) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
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

var update = function(query, update, callback) {
  Item.collection.update(query, { $set: update }, function(err, doc) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, doc);
    }
  });
}

module.exports.selectAll = selectAll;

module.exports.selectOne = selectOne;

module.exports.insertOne = insertOne;

module.exports.insertMany = insertMany;

module.exports.removeAll = removeAll;

module.exports.update = update;