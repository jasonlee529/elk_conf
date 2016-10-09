var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:19200',
  log: 'trace'
});

client.explain({
  // the document to test
  index: 'myindex',
  type: 'mytype',
  id: '1',

  // the query to score it against
  q: 'field:value'
}, function (error, response) {
  // ...
});
