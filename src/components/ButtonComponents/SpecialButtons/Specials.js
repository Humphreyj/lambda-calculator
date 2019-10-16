import React, { useState } from "react";
import SpecialButton from './SpecialButton';
import { specials } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  const [specialArr] = useState(specials);
  // console.log(specialArr);
  // STEP 2 - add the imported data to state

  return (
    <div>
      {
       specialArr.map((item,i) => {
         console.log(item);
         return <SpecialButton 
         key={i} 
         spec = {item} 
         handleClear = {props.handleClear}
         />
       })
      }
    </div>
  );
};
export default Specials;