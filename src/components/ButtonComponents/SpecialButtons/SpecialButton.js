import React from "react";

const SpecialButton = (props) => {
  return (
    <button 
    className="btn special" 
    onClick= {() => props.handleSpecial(props.spec)}>{props.spec}</button>
  );
};

export default SpecialButton;