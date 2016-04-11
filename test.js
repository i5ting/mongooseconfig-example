var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
require('mongooseconfig')(__dirname + '/config/mongodb')

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) // ...
  console.log('meow');
});