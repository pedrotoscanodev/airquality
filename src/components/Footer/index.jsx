import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  color: #f2f2f2;
  background-color: #143642;
  position: absolute;
  width: 100%;
  bottom: 0;
`;
const Footer = () => {
  return <FooterContainer>Criado Por Pedro Toscano</FooterContainer>;
};

export default Footer;
