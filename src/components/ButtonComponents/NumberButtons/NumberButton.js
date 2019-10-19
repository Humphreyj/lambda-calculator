import React from "react";


const NumberButton = (props) => {
  console.log(typeof props.num)
  return (
    
    <div>
      <button 
      onClick={props.addToInput} className={props.num == 0 ? `big btn number-btn`: `btn number-btn`}>{props.num}</button>
    </div>
    
    
    
  );
};

export default NumberButton;