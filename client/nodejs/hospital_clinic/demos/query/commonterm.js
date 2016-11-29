/**
 * 测试CommonTerm Query
 */

var es = require('elasticsearch'),
    config = require('../../config');

var client = es.Client(config.es);

client.search({
    index: config.es.index,
    body: {
        query: {
            common: {
                personal_history: {
                    query: "冠心病",
                    low_freq_operator: 'and'
                }
            }
        }
    },
    function(err, response) {


    }

})
