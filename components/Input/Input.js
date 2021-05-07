import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        onChange={(ev) =>
          props.inputValueChange({
            filterName: props.name,
            value: ev.target.checked,
          })
        }
      ></input>
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  );
};

export default Input;
