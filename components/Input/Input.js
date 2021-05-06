import React from "react";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <input type={props.type} name={props.name}></input>
    </div>
  );
};

export default Input;
