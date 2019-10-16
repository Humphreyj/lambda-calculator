import React from "react";

const SpecialButton = (props) => {
  return (
    <button 
    className="btn special" 
    onClick={props.handleClear}>{props.spec}</button>
  );
};

export default SpecialButton;