var elasticsearch = require('elasticsearch');
var client = require('./client');

console.log(client);

client.get({
  index: 'myindex',
  type: 'mytype',
  id: 1
}, function (error, response) {
  // ...
});
