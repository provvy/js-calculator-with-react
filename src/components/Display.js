import React from "react";

const Display = (props) => {
  return (
    <div className="display">
      <div className="counter">{props.counter.toLocaleString()}</div>
      <div className="numbers">{props.numbers.toLocaleString()}</div>
    </div>
  );
}

export default Display;
