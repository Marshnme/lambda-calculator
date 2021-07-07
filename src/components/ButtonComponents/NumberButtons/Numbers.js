import React, {useState} from "react";
import {numbers} from "../../../data";
import NumberButton from "../NumberButtons/NumberButton"
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [topRow] = useState(numbers.slice(0,3));
  const [middleRow] = useState(numbers.slice(3,6));
  const [bottomRow] = useState(numbers.slice(6,9));

  // console.log("number:", number);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

       {
         <div >
            <div>
              {
                topRow.map((number,index) =>  < NumberButton  key = {index} number={number}/>
                )}
            </div>
           
           <div>
             {middleRow.map((number,index) => <NumberButton  key = {numbers + 1} number={number}/>
             )}
             </div>
           
           <div>
              {bottomRow.map((number,index) => <NumberButton  key = {numbers} number={number}/>
              )}

           </div>
           
        
         </div>
       }
    </div>
  );
};

export default Numbers;

