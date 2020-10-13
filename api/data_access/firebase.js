var admin = require('firebase-admin');



var admin = require("firebase-admin");

var serviceAccount = require("/home/bobby/Code/goals-tm/secrets/goals-tm-firebase-adminsdk-ilfqz-2fafd28f01.json");

var app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://goals-tm.firebaseio.com"
});

var db = app.firestore()


module.exports = { db }