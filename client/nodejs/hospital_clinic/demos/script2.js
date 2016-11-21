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
                "query": {
                    "bool": {
                        "must": [

                            {
                                "bool": {
                                    "must": [{
                                            "terms": {
                                                "exam_info.exam_class_name": ["超声"]
                                            }
                                        }, {
                                            "range": {
                                                "age": {
                                                    "gte": "18",
                                                    "lt": "40"
                                                }
                                            }
                                        }, {
                                            "terms": {
                                                "exam_info.exam_item_name": ["超声心动图检查"]
                                            }
                                        }, {
                                            "terms": {
                                                "test_info.test_item_name": ["肌酐"]
                                            }
                                        }, {
                                            "terms": {
                                                "sex_name": ["女"]
                                            }
                                        }, {
                                            "terms": {
                                                "drugs_in_hospital.main_ele_name": ["磺达肝癸钠"]
                                            }
                                        }, {
                                            "terms": {
                                                "test_info.test_class_name": ["酶学检查"]
                                            }
                                        }, {
                                            "terms": {
                                                "illn_info_diag_type.diag_illn_name": ["冠心病"]
                                            }
                                        }, {
                                            "range": {
                                                "admi_date_time": {
                                                    "gte": "1262275200000",
                                                    "lt": "1420041600000"
                                                }
                                            }
                                        }

                                    ]
                                }
                            }
                        ]
                    }
                },
                "filter": {
                    "script": {
                        "script": "doc['oper_info.oper_date'].value >= doc['drugs_in_hospital.drug_day'].value"
                    }
                }
            }
        },
        "_source": [
            "oper_info.oper_date",
            "drugs_in_hospital.drug_day"
        ],
        "size": 5
    },
    function(err, response) {
        console.log(err);
        console.log(response);
    }
})
