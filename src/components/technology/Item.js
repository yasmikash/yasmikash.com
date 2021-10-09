import React from "react";
import styled from "styled-components";

const Item = ({ title, icon: Icon }) => {
  return (
    <Wrapper>
      <div>
        <Icon className="item__icon" />
      </div>
      <div className="item__title">{title}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 12rem;
  padding: 1rem;
  border-radius: 3px;
  background-color: #f8f9fa;

  .item__icon {
    font-size: 6rem;
  }

  .item__icon:hover {
    opacity: 0.8;
  }

  .item__title {
    font-size: 1.8rem;
    font-family: "Courier Prime", monospace;
  }
`;

export default Item;
