import React from "react";
import styled from "styled-components";
import BioBadge from "./BioBadge";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <Wrapper>
      <div className="header__profile">
        <StaticImage
          className="header__profile-img"
          src="../../assets/images/yasmikash.jpg"
          alt="Yasmika Saubhagya"
        />
        <BioBadge />
      </div>
      <div className="header__cover">
        <h1 className="header__cover-text-main">Yasmika Saubhagya</h1>
        <h3 className="header__cover-text-secondary">
          I'm a full-stack software engineer who is enthusiastic about working
          with different technologies in development. Learning new technologies
          in-depth fascinates me, applying what learned in real-world projects
          pleases me.
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  column-gap: 5px;
  flex-wrap: wrap;

  .header__profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    background-color: #495057;
    border-radius: 3px;
    width: 40%;
  }

  .header__profile-img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
  }

  .header__cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    flex-wrap: wrap;
    border-radius: 3px;
    background-color: #343a40;
    padding: 20px;
    gap: 1rem;
  }

  .header__cover-text-main {
    font-size: 3rem;
    font-weight: normal;
    color: #f8f9fa;
    margin: 0;
  }

  .header__cover-text-secondary {
    font-size: 1.4rem;
    color: #f8f9fa;
    line-height: 2rem;
    text-align: justify;
    font-weight: normal;
    width: 500px;
    margin: 0;
  }
`;

export default Header;