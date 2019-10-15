import React, { useState } from "react";
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = () => {
  // console.log(operators);
  // STEP 2 - add the imported data to state
  const [operatorArr] = useState(operators);
  console.log(operatorArr);
  return (
    <div>
      {
        operatorArr.map((obj,i) => {
          
          let objData = Object.values(obj);
          console.log(objData);

          return <OperatorButton key={i} char={objData[0]} val = {objData[1]} />
        })
      }
    </div>
  );
};

export default Operators;
