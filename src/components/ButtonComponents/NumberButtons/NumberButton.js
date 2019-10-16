import React from "react";


const NumberButton = (props) => {
  return (
    <div>
      <button onClick={props.addToInput} className="btn number-button">{props.num}</button>
    </div>
    
    
    
  );
};

export default NumberButton;