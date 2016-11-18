/**
 * 测试相对位置大小的数据
 */
var es = require('elasticsearch'),
    config = require('../config');
var client = es.Client(config.es);

client.search({
    index: "hospital_clinic",
    body: {
        "query": {
            "filtered": {
                query: {
                    span_first: {
                        match: {
                            span_term: {
                                "oper_info.oper_name": "冠状动脉造影术"
                            }
                        },
                        end: 300
                    }
                },
                "filter": {
                    "script": {
                        "script": "doc['oper_info.oper_date'].value > doc['drugs_in_hospital.drug_day'].value"
                    }
                }
            }
        },
        "_source": [
            "oper_info.oper_date",
            "drugs_in_hospital.drug_day"
        ],
        "size": 2
    },
    function(err, response) {
        console.log(err);
        console.log(response);
    }
})
