import React from "react";

const OperatorButton = (props) => {
  return (
   <div>
     <button className="btn operator-button" 
     val={props.val}
     onClick={() => props.insertOperator(props.val)}
     >{props.char}</button>
   </div>
  );
};

export default OperatorButton;
