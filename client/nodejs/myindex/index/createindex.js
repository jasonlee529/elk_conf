var es = require('elasticsearch'),
    config = require('../config');


var client = es.Client(config.es);

client.create({
    index: 'myindex',
    type: 'mytype',
    id: '1',
    body: {
        title: 'Test 1',
        tags: ['y', 'z'],
        published: false,
        published_at: '2013-01-01',
        counter: 1
    }
}, function(err, response) {

})
