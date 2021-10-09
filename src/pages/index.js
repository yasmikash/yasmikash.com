import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import Section from "../components/layout/Section";
import Item from "../components/technology/Item";
import { FaNodeJs, FaReact, FaJava } from "react-icons/fa";
import { RiFlutterFill, RiReactjsLine } from "react-icons/ri";
import { SiCsharp } from "react-icons/si";
import Article from "../components/post/Article";
import { fetchArticlesApi } from "../services/article.service";
import styled from "styled-components";
import ReactLoading from "react-loading";
import Hire from "../components/custom/Hire";
import Testimonial from "../components/testimonial/Testimonial";

export default function Home() {
  const [articles, setArticles] = useState(null);

  const fetchArticles = async () => {
    try {
      const response = await fetchArticlesApi();
      setArticles(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Layout>
      <Header />
      <Section title="Technologies Familiarized">
        <SectionContainer>
          <Item title="Node.JS" icon={FaNodeJs} />
          <Item title="React.JS" icon={FaReact} />
          <Item title="React Native" icon={RiReactjsLine} />
          <Item title="Flutter" icon={RiFlutterFill} />
          <Item title="Java" icon={FaJava} />
          <Item title="C#" icon={SiCsharp} />
        </SectionContainer>
      </Section>
      <Section
        title="What people say on Fiverr"
        externalLink="https://www.fiverr.com/yasmikash"
      >
        <Testimonial />
      </Section>
      <Section
        title="Latest from my Medium"
        externalLink="http://yasmikash.medium.com"
      >
        {articles ? (
          <Article data={articles.items} />
        ) : (
          <SectionContainer>
            <ReactLoading type="bubbles" color="#495057" />
          </SectionContainer>
        )}
      </Section>
      <Hire />
    </Layout>
  );
}

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
