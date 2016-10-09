var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:19200',
  log: 'trace'
});


client.exists({
  index: 'myindex',
  type: 'mytype',
  id: 1
}, function (error, exists) {
  if (exists === true) {
    // ...
    console.log("exists 1;");
  } else {
    // ...
  }
});
