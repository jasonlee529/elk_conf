var es = require('elasticsearch'),
    config = require('../../config');

var client = es.Client(config.es);

client.search({
    index: "hospital_clinic",
    body: {
        query: {
            multi_match: {
                query: "冠心病",
                fields: ["family_history", "personal_history"]
            }
        },
        size: 20,
        _source: ["family_history", "personal_history"]
    },
    function(err, response) {
        console.log(response);
    }


})
