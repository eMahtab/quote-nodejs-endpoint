var express=require('express');

var app=express();

var mysql = require('mysql');
 
var connection = mysql.createConnection({
  host     : 'quotes.cod51i9yqypz.us-east-1.rds.amazonaws.com',
  database : 'quotesdb',
  user     : 'awesome_user',
  password : 'awesome_password',
  port     :  3306
});

connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
  });

app.get('/quotes', function (req, res) {
    connection.query('select * from quotes', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });

var port =  80;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});

