// import React  from 'react';
import React,{ useState }  from 'react';
import './index.css';
import InputNumber from 'rc-input-number';
import { changeProgress } from '../../actions';


function TickerVisual(props) {
  const [status, setStatus] = useState(props.goal.progress);
  
  return (
    <div className='ticker-visual-contianer'>
      <input 
        className='ticker-visual' 
        type="number" min="0" max="30" 
        onChange={(e) => {setStatus(e.target.value)}}
        onBlur={(e) => {changeProgress(status, props.goal.id,)}}
        value={status}

        />
    </div>

  );
}

export default TickerVisual;
