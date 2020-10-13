import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

export const useGoals = () => {
  const [Goals, setGoals] = useState('init');

  useEffect(() => {
    let unsubsribe = firebase
      .firestore()
      .collection("Goals");

    unsubsribe = unsubsribe.onSnapshot( snapshot => {
      const newGoals = snapshot.docs.map( Goals => (
        {
          id: Goals.id,
          ...Goals.data()
        }
      ))
      // console.log(newGoals)
      setGoals(newGoals);
    });

    return () => unsubsribe();
  }, [])
  //console.log(TestTasks)
  return {Goals, setGoals}
}
