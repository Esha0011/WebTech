var express=require('express');
var mysql=require('mysql');
const { isExternal } = require('util/types');
var app=express();
var connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    pass:'',
    database:'JobPortal',
});

connection.connect();
 
app.post('/api/jobs',function(req,res,next)){
    var cope=req.body.params;
    var query=connection.query('insert into Enroll set ?', cope,function(err,result){
        if(err){
            console.error(err);
            return res.send(err);
        }
        else{
            return res.send('OK');
        }
    });
}
app.listen(8080)