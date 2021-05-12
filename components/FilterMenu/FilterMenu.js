import React from "react";
import Input from "../Input/Input";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.quaternary};

  & input[type="checkbox"] {
    margin-left: 0;
  }
`;

const InputContainer = styled.div`
  display: grid;
  max-width: 100%;
  margin: 1rem 0;
  grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
  grid-gap: 0.5rem 1rem;
`;

const FilterMenu = (props) => {
  return (
    <Container>
      {/* Genres inputs*/}
      <span>Genres</span>
      <InputContainer>
        <Input
          name={"Action"}
          type={"checkbox"}
          // checked={props.filters.action}
          inputChanged={() => props.inputChangedHandler("action")}
        />

        <Input
          name={"Animation"}
          type={"checkbox"}
          inputChanged={() => props.inputChangedHandler("animation")}
        />

        <Input
          name={"Crime"}
          type={"checkbox"}
          inputChanged={() => props.inputChangedHandler("crime")}
        />

        <Input
          name={"Drama"}
          type={"checkbox"}
          inputChanged={() => props.inputChangedHandler("drama")}
        />

        <Input
          name={"Search"}
          type={"search"}
          inputChanged={(ev) => props.searchChangedHandler(ev.target.value)}
        />
      </InputContainer>

      {/* sort by Rating (Highest First) */}
      {/* Sort bY  Year (Newest First) */}
      <label htmlFor="movieSorting">Sort By:</label>
      <select
        name={"movieSorting"}
        id={"movieSorting"}
        onChange={(ev) => props.selectMenuHandler(ev.target.value)}
        value={props.sortByValue}
      >
        <option value="rating">Rating</option>
        <option value="releaseDate">Year</option>
      </select>
    </Container>
  );
};
export default FilterMenu;
