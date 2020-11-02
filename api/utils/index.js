const { 
    updateInFirebase, 
    addToFirebase, 
    deleteFromFirebase,
    getFromFirebase,
} = require('./firebase');

modules.exports = {
    addToFirebase,
    updateInFirebase,
    getFromFirebase,
    deleteFromFirebase,
}