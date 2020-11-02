// import makeComment from '../comment'
export default function makeDeleteGoal ({ deleteFromFirebase, getFromFirebase }) {
  return async function deleteGoal (firebaseId) {
    const exists = await getFromFirebase(firebaseId)
    if (exists) {
      console.log("I delete nothing!!!!!")
    }
    deleteFromFirebase(id)
  }
}