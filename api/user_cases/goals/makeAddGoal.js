export default function makeAddGoal ({ addToFirebase }) {
  return async function addGoal (collection, data) {
    const exists = await getFromFirebase(firebaseId)
    //TODO - make sure all field are filled out
    addToFirebase(collection, data)
  }
}