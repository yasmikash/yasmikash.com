import React from "react";
import styled from "styled-components";

const Hire = () => {
  return (
    <Wrapper>
      <h1>Interested in working with me on projects?</h1>
      <h2>send me an email @</h2>
      <h2 className="hire__email-text">
        <a href="mailto:yasmikash@gmail.com">yasmikash@gmail.com</a>
      </h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  background-color: #e9ecef;
  flex-direction: column;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 0.5rem;
  font-family: "Courier Prime", monospace;

  h1 {
    margin: 0;
    font-size: 2.4rem;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    margin: 0;
  }

  .hire__email-text a {
    color: #000000;
  }

  .hire__email-text a:hover {
    color: #000000;
  }
`;

export default Hire;
