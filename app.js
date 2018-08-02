var express=require('express');

var app=express();

var mysql = require('mysql');
 
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'quotesdb',
  user     : 'awesome_user',
  password : 'awesome_password'
});

app.get('/quotes', function (req, res) {
    connection.query('select * from quotes', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });

var port = process.env.PORT || 9091;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});

