import React, { useState } from "react";
import SpecialButton from './SpecialButton';
import { specials } from '../../../data';
import './Specials.css';

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  const [specialArr] = useState(specials);
  // console.log(specialArr);
  // STEP 2 - add the imported data to state

  return (
    <div className = 'specials'>
      {
       specialArr.map((item,i) => {
        //  console.log(item);
         return <SpecialButton 
         key={i} 
         spec = {item} 
         handleSpecial = {props.handleSpecial}
         />
       })
      }
    </div>
  );
};
export default Specials;