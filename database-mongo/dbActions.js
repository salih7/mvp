var db = require('../database-mongo');

// db.removeAll(function (err, removeItem) {
//   if (err) {
//     console.error('Could not remove... ', err);
//   } else {
//     console.log('Successfully removed all items');
//   }
// });

db.selectAll(function(err, results) {
  if (err) {
    console.error('Can not query DB.... ', err);
  } else {
    console.log('Got your matches! ', results);
  }
});