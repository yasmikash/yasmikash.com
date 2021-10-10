import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo/SEO";

const NotFound = () => {
  return (
    <Layout>
      <SEO />
      <Wrapper>
        <h1>404</h1>
        <h2>That page does not exist.</h2>
        <h3>
          Please go to the <a href="/">home page</a>, or if you want to contact
          me, send me an email @ hello@yasmikash.com.
        </h3>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 3rem;

  h1 {
    font-size: 4rem;
    margin: 0;
  }

  h2 {
    font-size: 2.5rem;
    margin: 0;
  }

  h3 {
    font-size: 2rem;
    font-weight: normal;
    margin: 0;
    margin-top: 1rem;
  }

  a {
    color: #000000;
  }

  a:hover {
    color: #000000;
  }
`;

export default NotFound;
