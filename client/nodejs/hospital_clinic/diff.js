/**
 * 验证取数新录入数据和上一般数据的差异
 */
var es = require('elasticsearch');
var mysql = require('mysql');
var config  = require('./config');
var pool = mysql.createPool(config.mysql);

pool.getConnection(function(err,connection){
  connection.query('select * from infisa_extract_attribute limit 1',function(err,rows,fields){
    rows.forEach(function(n){
      var aggs =  esResult(n,sqlResult);
     })
  })
})
function sqlResult(n,obj){
  var lastIndex = n.sql_column.lastIndexOf(".");
  var tableName = n.sql_column.substring(0,lastIndex);
  var column = n.sql_column.substring(lastIndex+1);
  var sql = " select distinct t1."+column+" name , count(1) cnt from "+tableName+" t1"+
            " join hospital.dw_userinfo t2 on (t1.pati_id = t2.pati_id and t1.pati_visit_id = t2.pati_visit_id) "+
            " group by t1."+column+" order by cnt desc limit 20" ;
  log(sql);
  pool.getConnection(function(err,connection){
     connection.query(sql, function(err,rows,fields){
     if(err === null){
       log(rows);
       rows.forEach(function(row,idx){
          var agg = obj[idx];
         log();
         log(row.name+" : "+row.cnt);
       })
     }else{
       log(err);
     }
    });
  })
}
var client = es.Client({
  host: "192.168.1.95:9200",
  log: "info"
});
function esResult(n,fn){
  client.search({
   index:'hospital_clinic',
   body:{
     query:{
       match_all:{}
     },
     size:0,
     aggs:{
       agg_name:{
         terms:{field:n.es_field,size:10}
       }
     }
   }
  },function(error,response){
    var aggs = response.aggregations.agg_name.buckets;
    fn(n,aggs);
  });
};
function log(obj){
  console.log(obj);
}
