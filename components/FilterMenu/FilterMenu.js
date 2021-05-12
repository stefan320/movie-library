import React from "react";
import Input from "../Input/Input";
import styled from "styled-components";
import SelectMenu from "../SelectMenu/SelectMenu";

const Container = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.quaternary};
  background-color: ${({ theme }) => theme.colors.quaternary};

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
    <div>
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
        </InputContainer>

        <Input
          name={"Search"}
          type={"search"}
          inputChanged={(ev) => props.searchChangedHandler(ev.target.value)}
        />

        <SelectMenu
          menuName={"movieSorting"}
          selectMenuHandler={(ev) => props.selectMenuHandler(ev.target.value)}
          label={"Sort By"}
          options={[
            {
              value: "rating",
              text: "Rating",
            },
            {
              value: "releaseDate",
              text: "Year",
            },
          ]}
        />
      </Container>
    </div>
  );
};
export default FilterMenu;
