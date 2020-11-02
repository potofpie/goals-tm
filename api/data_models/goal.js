
function fill_GetGoalNew(){
    const {
        id, 
        user, 
        progress, 
        text, 
        type 
    } = goal;
}


export default function buildMakeGoal() {
    return function makeGoal(newGoal=true,id=null){

        if (!goal.user) {
          throw new Error('A Goal must have an user.')
        }
        if (!goal.type) {
          throw new Error('A Goal must have an type.')
        }
        if (!goal.id) {
          throw new Error('A Goal must contain a firebase id.')
        }
        if (!goal.progress) {
          throw new Error('A Goal must contain progress number.')
        }
        if (!goal.text || goal.text.length < 1) {
          throw new Error('A Goal must include at least one character of text.')
        }
        const {
            createdOn, 
            modifiedOn,
            id, 
            user, 
            progress, 
            text, 
            type 
        } = goal;
        
      return Object.freeze({
        createdOn : createdOn,
        modifiedOn = modifiedOn,
        id : id,
        user : user,
        progress : progress,
        text : text,
        type : type
      })
    }
  }