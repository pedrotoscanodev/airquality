import React from "react";
import styled from "styled-components";

const Title = styled.div`
  color: #f2f2f2;
  height: 100px;
  background-color: #3c6e71;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`;

const Header = () => {
  return (
    <>
      <Title> Air Quality World</Title>
    </>
  );
};

export default Header;
