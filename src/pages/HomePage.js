import React from "react";
import styled from "styled-components";
const HomePage = () => {
  return (
    <Wrapper>
      <h1>Home Page?</h1>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    margin-top: 5rem;
    font-size: 5rem;
  }
`;

export default HomePage;
