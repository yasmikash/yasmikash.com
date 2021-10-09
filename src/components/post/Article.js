import React from "react";
import styled from "styled-components";
import { AiFillTag } from "react-icons/ai";
import { format } from "date-fns";
import { bp } from "../../config";

const Article = ({ data = [] }) => {
  const articles = [];

  if (data.length) {
    articles.push([data[0], data[1]]);
    articles.push([data[2], data[3]]);
  }

  return (
    <Wrapper>
      {articles.length &&
        articles.map(g => {
          return (
            <div className="article-row">
              {g.map(a => {
                return (
                  <div className="article">
                    <div className="article__img">
                      <img src={a.thumbnail} alt={a.title} />
                    </div>
                    <div className="article__content">
                      <h3 className="article__content-title">
                        <a href={a.link} target="_blank">
                          {a.title}
                        </a>
                      </h3>
                      <div className="article__content-metadata">
                        <div className="content-metadata__date">
                          {format(new Date(a.pubDate), "MMM dd, yyyy")}
                        </div>
                        <div className="content-metadata__categories">
                          {a.categories.map(c => {
                            return (
                              <div>
                                <AiFillTag className="content-metadata__categories-tag" />
                                {c}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;

  .article-row {
    display: flex;
    gap: 0.5rem;
  }

  .article {
    display: flex;
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 3px;
    width: 50%;
    gap: 0.5rem;
  }

  .article__img img {
    width: 18rem;
    height: 11rem;
    object-fit: cover;
    border-radius: 3px;
    box-shadow: 3px 2px 1px #e9ecef;
  }
  .article__img img:hover {
    opacity: 0.9;
  }

  .article__content {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    gap: 1rem;
    font-weight: 500;
  }

  .article__content-title {
    margin: 0;
    font-size: 1.5rem;
  }

  .article__content-title a {
    color: #000000;
  }

  .article__content-metadata {
    display: flex;
    font-size: 1.2rem;
    justify-content: space-between;
  }

  .content-metadata__categories {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .content-metadata__date {
    padding: 0.5rem;
    width: 35%;
  }

  .content-metadata__categories div {
    background-color: #e9ecef;
    padding: 0.5rem;
    border-radius: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }

  .content-metadata__categories-tag {
    display: flex;
  }

  @media ${bp.laptop} {
    .article-row {
      flex-direction: column;
    }

    .article {
      width: 100%;
    }
  }
`;

export default Article;
