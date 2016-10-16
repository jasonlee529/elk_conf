var elasticsearch = require('elasticsearch');

/* var client = elasticsearch.Client({
  host: "localhost:9200",
  log: "trace"
});
i*/
var client = require('./client');

client.create({
  index: 'myindex',
  type: 'mytype',
  id: '1',
  body: {
    title: 'Test 1',
    tags: ['y', 'z'],
    published: true,
    published_at: '2013-01-01',
    counter: 1
  }
}, function (error, response) {
  // ...
	console.log(response);
});
