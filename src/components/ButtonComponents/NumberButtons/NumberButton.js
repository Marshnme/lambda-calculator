import React from "react";


const NumberButton = props => {
  console.log("propss",props);
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.topRow}
      {props.middleRow}
      {props.bottomRow}
      {/* <button>
        
      </button> */}
    </div>
  );
};

export default NumberButton;