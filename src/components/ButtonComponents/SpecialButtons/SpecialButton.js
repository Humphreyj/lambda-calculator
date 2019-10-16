import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="btn special">{props.spec}</button>
  );
};

export default SpecialButton;