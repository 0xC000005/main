const express = require('express');
const router = express.Router();
const cookie = require('node-cookie');

router.get('/badminton', function(req, res, next) {
	res.render('badminton.ejs');
})

module.exports = router;