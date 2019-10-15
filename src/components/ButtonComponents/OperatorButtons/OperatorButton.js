import React from "react";

const OperatorButton = (props) => {
  return (
   <div>
     <button className="operator-button" val={props.val}>{props.char}</button>
   </div>
  );
};

export default OperatorButton;
