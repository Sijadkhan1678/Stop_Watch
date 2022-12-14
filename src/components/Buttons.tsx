import React,{FC} from 'react';
import {ButtonsProps} from '../types/index'

const Buttons:FC<ButtonsProps> = ({startWatch,stopWatch,resetWatch,isStart}) =>{
  return (
    <div role='div' className='button-container'>
  
      <button onClick={resetWatch}>Reset </button>
      { !isStart ? 
     <button onClick={startWatch}>Start </button>  :
     <button onClick={stopWatch}>Stop </button>
      }
    </div>
  );
}

export default Buttons;
