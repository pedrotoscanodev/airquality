import React from "react";
import WeatherCard from "../WeatherCard";
import CardsRoot from "./styles";
const MainContent = () => {
  console.log("oi");
  return (
    <CardsRoot>
      <WeatherCard></WeatherCard>
    </CardsRoot>
  );
};

export default MainContent;
