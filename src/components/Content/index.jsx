import React from "react";
import styled from "styled-components";
import WeatherCard from "../WeatherCard";
const ContainerRoot = styled.div`
  color: #f2f2f2;
  background-image: url("../../assets/background.jpg");
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = () => {
  return (
    <ContainerRoot>
      <WeatherCard />
    </ContainerRoot>
  );
};

export default Content;
