import React from "react";


const NumberButton = (props) => {
  return (
    <div>
      <button onClick={props.addToTotal} className="btn number-button">{props.num}</button>
    </div>
    
    
    
  );
};

export default NumberButton;