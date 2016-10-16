/**
 * 验证取数新录入数据和上一般数据的差异
 */
var es = require('elasticsearch');
var mysql = require('mysql');
/*
var client199 = es.client({
  host: "192.168.1.199:9230",
  log: "trace"}
);
var client96 = es.client({
  host: "192.168.1.95:9200",
  log: "trace"
});
*/

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'sa',
  database:'mysql'
});

connection.connect();
connection.query('select * from user',function(err,rows,fields){
  rows.forEach(function(n){
      console.log(n);
  })
})
connection.end();
