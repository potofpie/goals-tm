var express = require('express');
var router = express.Router();


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('welcome to the firebase route'); 
});

// router.get('/addGoal', function(req, res, next) {
//     res.send('add something'); 
//   });
  

router.post('/addGoal', function(req, res, next) {
  res.send(req.json['something']); 
});

module.exports = router;
