/**
 * 验证取数新录入数据和上一般数据的差异
 */
var es = require('elasticsearch');
var mysql = require('mysql');

var attrs=[];

var connection = mysql.createConnection({
  host:'192.168.1.199',
  user:'web',
  password:'web_123qaz',
  database:'web_clinic'
});

connection.connect();
connection.query('select * from infisa_extract_attribute',function(err,rows,fields){
  rows.forEach(function(n){
    var aggs =  esResult(n);
    var data = sqlResult(n);
    console.log(aggs)
    aggs.forEach(function(agg,index){
        console.log(agg) ;
      console.log(data[index]);
    })
  })
})
//connection.end();

function sqlResult(n){
  var lastIndex = n.sql_column.lastIndexOf(".");
  var tableName = n.sql_column.substring(0,lastIndex);
  var column = n.sql_column.substring(lastIndex+1);
  console.log(tableName+"   "+column);
  connection.query(" select distinct "+column+" , count(1) cnt from "+tableName+" group by "+column+" order by cnt desc limit 20" , function(err,rows,fields){
    return rows;
  });
}
var client199 = es.Client({
  host: "192.168.1.91:9200",
  log: "info"
});
/*
var client96 = es.client({
  host: "192.168.1.95:9200",
  log: "trace"
});
*/
function esResult(n){
  client199.search({
   index:'hospital_clinic',
   body:{
     query:{
       match_all:{}
     },
     size:0,
     aggs:{
       agg_name:{
         terms:{field:n.es_field}
       }
     }
   }
  },function(error,response){
    var aggs = response.aggregations.agg_name.buckets;
    console.log(n.es_field);
    console.log(JSON.stringify(aggs));
    return aggs;
  });
};

