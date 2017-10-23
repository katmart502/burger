//server.js is the initial starting point of the Node/Express server
var express= require('express');
var bodyParser= require("body-parser")
// after the dependencies are set-up set up the express App
var app= express();
var Port= process.env.Port || 8080;

// Set up the Express app to handle data parsing 
app.use(bodyParser.urlencoded({ extended: true }));

//Static directory to be served
app.use(express.static("app/public"));

//routes to make burger app function
require("./app/routes/api-routes.js")(app);

//commuicates with server 
app.listen(Port, function(){
	console.log("testing"+ PORT);

});