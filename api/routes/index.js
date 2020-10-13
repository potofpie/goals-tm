var firebase = require('firebase');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Goals TM API');
});

module.exports = router;
