import React from "react";

const SelectMenu = (props) => {
  const options = props.options.map((option) => (
    <option value={option.value}>{option.text}</option>
  ));
  return (
    <div>
      <label htmlFor={props.menuName}>{props.label}</label>
      <select
        name={props.menuName}
        id={props.menuName}
        onChange={props.selectMenuHandler}
        value={props.sortByValue}
      >
        {options}
      </select>
    </div>
  );
};

export default SelectMenu;
