//connection.js  initiates the connection to MYSQL
var mySql= require("mySql") 

// The connection information
var connection=mySql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: ""
	database: "burger"
});

//connect to the database
connection.connect(function(err){
	if(err){
		console.error("error connecting:"+ err.stack);
		return;
	}
	console.log("connected as id"+ connection.threadId);
});

//export connection
module.exports=connection; 