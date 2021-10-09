import React from "react";
import styled from "styled-components";
import BioBadge from "./BioBadge";
import { StaticImage } from "gatsby-plugin-image";
import { bp } from "../../config";

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
  gap: 0.5rem;
  flex-wrap: wrap;

  .header__profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem;
    background-color: #495057;
    border-radius: 3px;
    width: 40%;
    flex-grow: 1;
    gap: 4rem;
  }

  .header__profile-img {
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
  }

  .header__cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    flex-wrap: wrap;
    border-radius: 3px;
    background-color: #343a40;
    padding: 2rem;
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
    width: 80%;
    margin: 0;
  }

  @media ${bp.tablet} {
    flex-direction: column;

    .header__profile {
      width: 100%;
    }

    .header__cover {
      width: 100%;
    }

    .header__cover-text-secondary {
      width: 100%;
    }
  }
`;

export default Header;
