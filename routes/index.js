var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
res.send("Hello gaurav");
  
});



/* GET home page. */
router.get('/name', function(req, res, next) {	
  res.render('index', { title: 'hello' });
});



/* GET home page. */
router.get('/test', function(req, res, next) {	
  res.render('index', { title: 'test' });
});


module.exports = router;
