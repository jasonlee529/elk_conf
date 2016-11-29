/**
 * 测试Fuzzy Like This  Query
 */

var es = require('elasticsearch'),
    config = require('../../config');

var client = es.Client(config.es);

client.search({
    index: config.es.index,
    body: {
        query: {
            fuzzy_like_this: {
              fields : ['name','gender'],
              like_text  : '男',
              max_query_terms : 12
            }
        }
    },
    function(err, response) {


    }

})
