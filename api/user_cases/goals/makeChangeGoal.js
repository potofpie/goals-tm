export default function makeChangeGoal ({ updateInFirebase, getFromFirebase }) {
  return async function changeGoal (collection, firebaseId, data) {
    const exists = await getFromFirebase(firebaseId)
    //TODO - add error checking to see if field are accurate
    updateInFirebase(collection, firebaseId, data)
  }
}