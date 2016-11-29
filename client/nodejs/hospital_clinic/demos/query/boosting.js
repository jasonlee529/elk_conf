/**
 * 测试BoostingQuery
 */

var es = require('elasticsearch'),
    config = require('../../config');

var client = es.Client(config.es);

client.search({
    index: config.es.index,
    body: {
        query: {
            boosting: {
                positive: {
                    term: {
                        'personal_history': "冠心病"
                    }
                },
                negative: {
                    term: {
                        'family_history': "高血压"
                    }
                },
                negative_boost: 0.2
            }
        }
    },
    function(err, response) {


    }

})
