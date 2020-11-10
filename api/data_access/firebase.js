const admin = require('firebase-admin');
const serviceAccount = require("/mnt/c/Code/goals-tm/secrets/goals-tm-firebase-adminsdk-ilfqz-2fafd28f01.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://goals-tm.firebaseio.com"
});

const db = app.firestore()

const addDocument = (collectionName, data) => {
  db.collection(collectionName).doc(firebaseId).add(data)
}

const deleteDocument = (collectionName, firebaseId) => {
  return db.collection(collectionName).doc(firebaseId).delete();
}

const updateDocument = (collectionName, firebaseId, data) => {
  return db.collection(collectionName).doc(firebaseId).update(data);
}

const dataAccess = {
  db: db,
  updateDocument : updateDocument,
  deleteDocument: deleteDocument,
  addDocument: addDocument
}


module.exports = { dataAccess : dataAccess }