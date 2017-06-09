// 引入express框架
var express = require('express');
// 引入static框架
var static = require('express-static');
// 引入数据库
var mysql = require('mysql');
// 连接数据库
var db = mysql.createConnection({"host":"localhost","user":"root","password":"","database":"mregister"});
// 搭建服务器
var server = express();
// 监听
server.listen(8465);
// 设置静态路径
server.use(static('www'));
// 创建中间件
server.get('/add',function(req,res){
	var json = req.query;
	// sql数据库查询语句
	var charSql = 'SELECT * FROM mregister1';
	// 建立后台与数据库连接
	db.query(charSql,function(err,data){
		if(!err){
			for(var i = 0; i < data.length;i++){
				if(json.user == data[i].user){
					if(json.password == data[i].password){
						res.send('{"error":0,"res":"登陆成功"}');
						res.end();
						return;
					}else{
						res.send('{"error":1,"res":"用户名或密码错误"}');
						res.end();
					}
				}
			}
			for(var i = 0; i< data.length;i++){
				if(json.user != data[i].user){
					res.send('{"error":1,"res":"用户名不存在请注册"}');
					res.end();
					return;
				}else{
					return;
				}
			}

		}
	})
})
server.get('/zhuceyo',function(req,res){
	var json=req.query;
	var zySql='SELECT * FROM mregister1 WHERE user="'+json.user+'"';
	db.query(zySql,function(err,data){
		if (!data.length) {
			var zcySql='INSERT INTO mregister1 VALUES("0","'+json.user+'","'+json.password+'")';
			db.query(zcySql,function(err,data){
				res.send('{"error":0,"msg":"注册成功"}');
				res.end();
			});
		}else{
			res.send('{"error":1,"msg":"该用户名已被占用"}');
			res.end();
		}				

	})
});
