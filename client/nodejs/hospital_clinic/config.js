/**
 * 配置信息，数据库连接
 */
var config  = {};

config.mysql = {
	host:'192.168.1.91',
  port:'3306',
  user : 'web',
  password : 'web_123qaz',
  database : 'web_clinic'
}
config.es = {
  host: '192.168.1.95:9200',
  log : 'info'
}

module.exports = config;
