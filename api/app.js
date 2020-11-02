const express = require('express')
require('dotenv').config()
var bodyParser = require('body-parser')
var {db} = require('./data_access')

const {
  // firebase, 
  birdrouter 
} = require('./routes');

const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 




// app.use('/firebase', firebase);
app.use('/birdrouter', birdrouter);


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//   console.log(req.body)
//   res.send('Hello World!')
// })


// app.post('/deleteGoal', function(req, res, next) {
//   const { firebaseId } = req.body;
//   console.log(firebaseId);
//   db.collection("Goals").doc(firebaseId).delete()
//   res.send('Hello World!')
// });


// app.post('/addGoal', function(req, res, next) {
//   const { type } = req.body
//   db.collection("Goals").add({
//     type: type,
//     text: '',
//     progress: 0
//   })
//   res.send('Hello World!')
// });

// app.post('/changeText', function(req, res, next) {
//   const { text, firebaseId } = req.body
//   db.collection("Goals").doc(firebaseId).update({
//     text: text,
//   })
//   res.send('Hello World!')
// });


// app.post('/changeProgress', function(req, res, next) {
//   const { progress, firebaseId } = req.body
//   console.log('firebaseId ' + firebaseId);
//   console.log('progress ' + progress);
//   db.collection("Goals").doc(firebaseId).update({
//     progress: progress,
//   })
//   res.send('Hello World!')
// });
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})