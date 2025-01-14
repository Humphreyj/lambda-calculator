import React, { useState } from "react";
import NumberButton from './NumberButton';
import { numbers } from '../../../data';
import './Numbers.css';
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  // console.log(numbers);
  const [numberArr] = useState(numbers)
  
  
  return (
    
    <div className = 'numbers'>
      
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

       {
         numberArr.map((num, i) => {
          //  console.log(num);
           return <NumberButton addToInput = {() =>props.addToInput(num)} key = {i} num={num}/>
         })
         
       }
       
       
       
    </div>
  );
};

export default Numbers;
