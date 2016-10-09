var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:19200',
  log: 'trace'
});

client.explain({
  index: 'myindex',
  type: 'mytype',
  id: '1',
  body: {
    query: {
      match: { title: 'test' }
    }
  }
}, function (error, response) {
  // ...
});
