import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <div>Error 404</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  div {
    margin-top: 5rem;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    font-size: 5rem;
  }
`;

export default Error;
