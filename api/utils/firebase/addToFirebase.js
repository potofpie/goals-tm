const { db } = require("../../data_access");
export default function addToFirebase({ collection, data }) {
    db.collection(collection).add(
        data
    )
}