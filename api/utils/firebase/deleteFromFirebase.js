const { db } = require("../../data_access");

export default function deleteFromFirebase({ collection, firebaseId }) {
    db.collection(collection).doc(firebaseId).delete()
}