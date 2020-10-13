import React,{ useState }  from 'react';
import './index.css';
import { changeProgress } from '../../actions/changeProgress';


function initProgessBarArray(length) {
  let array = []
  for(var i = 0; i < length; i++){
    array.push(i); 
  }
  return array
}

function ProgressBarVisual(props) {
  const [status, setStatus] = useState(props.goal.progress);
  
  return (
    <div className='progess-bar'>
      {initProgessBarArray(100).map(line => 
        {return <div 
            className={status < line ? 'inactive-progess-bar-line' : 'active-progess-bar-line'} 
            id={line}
            onClick={(e) => {setStatus(e.target.id, changeProgress(e.target.id, props.goal.id));}} 
          />
        }
      )}
    </div>

  );
}

export default ProgressBarVisual;
