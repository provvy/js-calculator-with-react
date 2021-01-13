import React from "react";

const Button = (props) => {
  return(
    <button disabled={props.disabled} onClick={props.onclick} id={props.value} className="button">{props.value}</button>
  );
}

export default Button;
