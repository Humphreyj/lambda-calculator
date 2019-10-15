import React from "react";

const OperatorButton = (props) => {
  return (
   <div>
     <button className="operator-button">{props.char}</button>
   </div>
  );
};

export default OperatorButton;
