const { db } = require("../../data_access");
export default function updateInFirebase({ collection, firebaseId, data }) {
  db.collection(collection).doc(firebaseId).update(
    data
  )
}