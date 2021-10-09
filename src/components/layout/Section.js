import React from "react";
import styled from "styled-components";
import { BiLinkExternal } from "react-icons/bi";

const Section = ({ title, children, externalLink = false }) => {
  return (
    <Wrapper>
      <div className="section__header">
        <div className="section__header-container">
          <h3 className="section__header-container-title">{title}</h3>
          {externalLink && (
            <BiLinkExternal
              className="section__header-container-icon"
              onClick={() => window.open(externalLink, "_blank")}
            />
          )}
        </div>
        <div className="section__header-container-divider"></div>
      </div>
      <div className="section__body">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  display: flex;
  background-color: #e9ecef;
  flex-direction: column;
  border-radius: 3px;

  .section__header-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .section__header-container-title {
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    text-shadow: 2px 0.2px 1px #f8f9fa;
    margin: 0;
    padding: 0.5rem;
  }

  .section__header-container-divider {
    background-color: #f8f9fa;
    width: 100%;
    height: 2px;
  }

  .section__body {
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
  }

  .section__header-container-icon {
    font-size: 2rem;
    display: flex;
    cursor: pointer;
    color: #000000;
  }
`;

export default Section;
