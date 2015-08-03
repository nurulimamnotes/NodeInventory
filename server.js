"use strict";

const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const model= require("./routes/api").router;
const fs = require("fs");
const winston = require("winston");

mongoose.connect("mongodb://localhost/rest_test");

const app = express();

app.use(express.static('app'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//for the history
app.post("/history",function(req,res){

	//write file 
	fs.writeFile("history.txt",req.body.history,function(err){
		if(err){
			winston.log('Error writing history file', {timestamp: Date.now(), pid: process.pid});
		}
	})
	res.send("success");
})

//for the api
app.use("/api", require("./routes/api"));



//set up server
let server = app.listen(8081, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

