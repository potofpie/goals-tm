const { db } = require("../../data_access");
export default function getFromFirebase({ collection, firebaseId }) {
    db.collection(collection).doc(firebaseId)
}