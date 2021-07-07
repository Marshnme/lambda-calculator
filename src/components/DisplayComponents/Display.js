import React, {useState} from "react";


const Display = () => {
  const [count, setCount] = useState(0);
  return <div className="display">{/* Display any props data here */
    count
  }</div>;
};


export default Display;