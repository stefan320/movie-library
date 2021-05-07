import React from "react";
import Input from "../Input/Input";
import styled from "styled-components";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

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
  const inputChangedHandler = (ev) => {
    console.log(ev);
  };

  return (
    <Container>
      {/* Generes inputs*/}
      <span>Generes</span>
      <InputContainer>
        <Input
          name={"Action"}
          type={"checkbox"}
          inputValueChange={inputChangedHandler}
        />
        <Input name={"Animation"} type={"checkbox"} />
        <Input name={"Comedy"} type={"checkbox"} />
        <Input name={"Crime"} type={"checkbox"} />
        <Input name={"Drama"} type={"checkbox"} />
        <Input name={"Other"} type={"checkbox"} />
      </InputContainer>

      {/* sort by Rating (Highest First) */}
      {/* Sort bY  Year (Newest First) */}
      <label htmlFor="movieSorting">Sort By:</label>
      <select name={"movieSorting"}>
        <option>Rating</option>
        <option>Year</option>
      </select>
    </Container>
  );
};
export default FilterMenu;
