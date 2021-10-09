import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { bp } from "../../config";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        color: #000000;
    }
    
    a {
        color: #f8f9fa;
        text-decoration: none
    }

    a:hover {
        text-decoration: underline;

    }

    #gatsby-focus-wrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    @media ${bp.tablet} {
      html {
        font-size: 56.25%;
      }
    }

    @media ${bp.laptop} {
      html {
        font-size: 50%;
      }
    }
`;

export default Layout;
