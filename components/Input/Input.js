import React from "react";

const Input = (props) => {
  return (
    <div>
      <input type={props.type} name={props.name} id={props.name}></input>
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  );
};

export default Input;
