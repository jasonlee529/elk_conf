var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:19200',
  log: 'trace'
});

client.ping({
  requestTimeout: 30000,

  // undocumented params are appended to the query string
  hello: "elasticsearch"
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});



client.search({
  q: 'pants'
}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message);
});

exports.client = client;
