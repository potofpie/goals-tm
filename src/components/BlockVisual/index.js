import React,{ useState }  from 'react';
import './index.css';
import { changeProgress } from '../../actions/changeProgress';

// let onClickBlock = ( id, status, index ) => {
//   if(status){
//     changeProgress(index, id);
//   }
//   else{
//     changeProgress(index-1, id);
//   }
  
// }


function BlockVisual(props) {
  const [ status, index ] = props.marker;
  const id = props.goalId;
  // console.log(status, index, id)
  // const [status, setStatus] = useState(statusTmp);
  // const [index, setIndex] = useState(indexTmp);

  return (
    <div 
        className={status ? 'active-block' : 'inactive-block'} 
        onClick={() => status ? changeProgress(index-1, id) : changeProgress(index, id)} 
    />

  );
}

export default BlockVisual;
