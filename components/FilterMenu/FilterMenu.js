import React from "react";
import Input from "../Input/Input";

const FilterMenu = () => {
  return (
    <div>
      {/* Generes inputs*/}
      <div>
        <span>Generes</span>
        <Input name={"Action"} type={"checkbox"} />
        <Input name={"Animation"} type={"checkbox"} />
        <Input name={"Comedy"} type={"checkbox"} />
        <Input name={"Crime"} type={"checkbox"} />
        <Input name={"Drama"} type={"checkbox"} />
        <Input name={"Other"} type={"checkbox"} />
      </div>

      {/* sort by Rating (Highest First) */}
      {/* Sort bY  Year (Newest First) */}
      <label htmlFor="movieSorting">Sort By:</label>
      <select name={"movieSorting"}>
        <option>Rating</option>
        <option>Year</option>
      </select>
    </div>
  );
};
export default FilterMenu;
