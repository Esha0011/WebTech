var mysql=require('mysql');
var conn=mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
});
//Database created
conn.connect(function(err){
 if(!err){
 console.log("Connected...");
 }
 else{
 console.log("Error");
 }
 conn.query("CREATE DATABASE ",function(err,result){
 if(err) throw err;
 console.log("Database created");
 })
//Table created
 /* var sql="CREATE TABLE book_details(Name VARCHAR(25),Author VARCHAR(25),Quantity VARCHAR(25))";
 conn.query(sql,function(err,result){
 if(err) throw err;
 console.log("Table created..");
 })

//Record inserted
var sql="INSERT INTO book_details VALUES('My Journey','Abdul Kalam','30')";
 conn.query(sql,function(err,result){
 if(err) throw err;
 console.log("Record inserted");
 })
//Table updated 
conn.query("UPDATE book_details SET Quantity='100'", function(err,result){
 if(err) throw err;
 console.log("Record updated");
 })
//Printed table values
 conn.query("SELECT * FROM book_details", function(err,result){
 if(err) throw err;
 console.log(result);
 })
//Printed table values in server
 const http=require("http");
const server=http.createServer((req,res)=>{
 conn.connect(function(err){
 if(!err){
 console.log("Connected...");
 }
 else{
 console.log("Error");
 }
 conn.query("SELECT * FROM book_details", function(err,result){
 if(err) throw err;
 if(req.url==='/book'){

 res.write(JSON.stringify(result));
 res.end();
 }
 console.log(result);
 })
 });
}) */
server.listen(1234);
console.log("Server running at port 1234");
});
