import React from "react";
import styled from "styled-components";
import { BiBuildings } from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMedium,
} from "react-icons/ai";
import { SiFiverr } from "react-icons/si";

const BioBadge = () => {
  return (
    <Wrapper>
      <Item>
        <Icon>
          <BiBuildings />
        </Icon>
        <Text>
          Currently working @{" "}
          <a href="https://www.itelasoft.com.au/" target="_blank">
            iTelaSoft
          </a>
        </Text>
      </Item>
      <Item>
        <Icon>
          <SiFiverr />
        </Icon>
        <Text>
          <a href="https://www.fiverr.com/yasmikash" target="_blank">
            fiverr/yasmikash
          </a>
        </Text>
      </Item>
      <Item>
        <Icon>
          <AiOutlineMail />
        </Icon>
        <Text>
          <a href="mailto:hello@yasmikash.com">hello@yasmikash.com</a>
        </Text>
      </Item>
      <Item>
        <Icon>
          <AiOutlineLinkedin />
        </Icon>
        <Text>
          <a href="https://www.linkedin.com/in/yasmikash" target="_blank">
            linkedIn/yasmikash
          </a>
        </Text>
      </Item>
      <Item>
        <Icon>
          <AiOutlineGithub />
        </Icon>
        <Text>
          <a href="https://github.com/yasmikash" target="_blank">
            github/yasmikash
          </a>
        </Text>
      </Item>
      <Item>
        <Icon>
          <AiOutlineMedium />
        </Icon>
        <Text>
          <a href="https://yasmikash.medium.com/" target="_blank">
            medium/yasmikash
          </a>
        </Text>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: #f8f9fa;
  font-size: 1.3rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Icon = styled.div`
  width: 2.5rem;
  display: flex;
  font-size: 1.8rem;
`;
const Text = styled.div``;

export default BioBadge;
