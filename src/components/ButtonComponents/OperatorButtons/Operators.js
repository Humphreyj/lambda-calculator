import React, { useState } from "react";
import OperatorButton from './OperatorButton';
import './Operators.css';

//import any components needed

//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = (props) => {
  // console.log(operators);
  // STEP 2 - add the imported data to state
  const [operatorArr] = useState(operators);
  // console.log(operatorArr);
  return (
    <div className = 'operators'> 
      {
        //This was a little bit of a challenge because of how the data was set up.
        operatorArr.map((obj,i) => {
          //I first mapped through the received array, which was an array of objects
          //I assigned obj for each object and i to assign a key
          
          let objData = Object.values(obj);
          //I pulled the values out of the objects and assigned them the same values as prop names.
          // console.log(objData);

          return <OperatorButton insertOperator={props.insertOperator} key={i} char={objData[0]} val = {objData[1]} />
        })
      }
    </div>
  );
};

export default Operators;
