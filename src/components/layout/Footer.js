import React from "react";
import { format } from "date-fns";
import styled from "styled-components";

const Footer = () => {
  return <Wrapper>{format(new Date(), "yyyy")}, Yasmika Saubhagya</Wrapper>;
};

const Wrapper = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export default Footer;
