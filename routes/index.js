const express = require('express');
const router = express.Router();
const nodeCookie = require('node-cookie');

if(nodeCookie){
	router.get('/', function(req, res, next) {
	  var datetime = new Date();
	  console.log(datetime);
	  res.render('index.ejs');
	});
}

module.exports = router;