var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:19200',
  log: 'trace'
});
client.delete({
  index: 'myindex',
  type: 'mytype',
  id: '1'
}, function (error, response) {
  // ...
  });
