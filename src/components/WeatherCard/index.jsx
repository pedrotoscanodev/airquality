import React from "react";
import {
  ContentRoot,
  Select,
  SettingSection,
  Option,
  InfoSection,
  DefaultSection,
  Title,
  InfoRow,
} from "./styles";
import airQualityService from "../../services/airQualityService";
import react from "react";
const WeatherCard = () => {
  const [countries, setCountries] = React.useState([]);
  const [states, setStates] = React.useState([]);
  const [cities, setCities] = React.useState([]);
  const [data, setData] = React.useState();

  const [selectedCountry, setSelectedCountry] = React.useState();
  const [selectedState, setSelectedState] = React.useState();
  const [selectedCity, setSelectedCity] = React.useState();

  const getCountries = React.useCallback(() => {
    airQualityService
      .getCountries()
      .then(({ data }) => setCountries(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getStates = React.useCallback((selectedCountry) => {
    airQualityService
      .getStates(selectedCountry)
      .then(({ data }) => setStates(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getCities = React.useCallback((selectedCountry, selectedState) => {
    airQualityService
      .getCities(selectedCountry, selectedState)
      .then(({ data }) => setCities(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getData = React.useCallback(
    (selectedCountry, selectedState, selectedCity) => {
      airQualityService
        .getData(selectedCountry, selectedState, selectedCity)
        .then(({ data }) => setData(data))
        .catch((err) => {
          console.log(err);
        });
    },
    []
  );

  react.useEffect(() => {
    getCountries();
  }, []);

  react.useEffect(() => {
    if (selectedCountry) {
      getStates(selectedCountry);
    }
  }, [getStates, selectedCountry]);

  react.useEffect(() => {
    if (selectedState) {
      getCities(selectedCountry, selectedState);
    }
  }, [getCities, selectedState, selectedCountry]);

  react.useEffect(() => {
    if (selectedCity) {
      getData(selectedCountry, selectedState, selectedCity);
    }
  }, [getData, selectedState, selectedCountry, selectedCity]);

  return (
    <ContentRoot>
      {!data && (
        <DefaultSection>
          <Title>
            {selectedCountry
              ? selectedState
                ? "Select a City"
                : "Select a State"
              : "Select a country"}
          </Title>
        </DefaultSection>
      )}
      {data && (
        <InfoSection>
          <Title>{data.data?.city}</Title>

          <InfoRow>
            <strong>{"Temperature: "} </strong> {data.data?.current.weather.tp}
            {"°C"}
          </InfoRow>
          <InfoRow>
            <strong>{"Humidity: "}</strong> {data.data?.current.weather.hu}
            {" %"}
          </InfoRow>
          <InfoRow>
            <strong>{"Wind speed: "}</strong> {data.data?.current.weather.ws}
            {" m/s"}
          </InfoRow>

          <InfoRow>
            <strong>{"Air Quality Index (USA): "}</strong>
            {data.data?.current.pollution.aqius}
          </InfoRow>

          <InfoRow>
            <strong>{"Main Polluent: "}</strong>
            {data.data?.current.pollution.mainus}
          </InfoRow>
        </InfoSection>
      )}
      <SettingSection>
        <Select onChange={(e) => setSelectedCountry(e.target.value)}>
          <Option value="">Select a country</Option>

          {countries.data?.map((e) => (
            <Option key={e.country} value={e.country}>
              {e.country}
            </Option>
          ))}
        </Select>
        {selectedCountry && (
          <Select onChange={(e) => setSelectedState(e.target.value)}>
            <Option value="">Select a State</Option>

            {states.data?.map((e) => (
              <Option key={e.state} value={e.state}>
                {e.state}
              </Option>
            ))}
          </Select>
        )}
        {selectedState && (
          <Select onChange={(e) => setSelectedCity(e.target.value)}>
            <Option value="">Select a City</Option>

            {cities.data?.map((e) => (
              <Option key={e.city} value={e.city}>
                {e.city}
              </Option>
            ))}
          </Select>
        )}
      </SettingSection>
    </ContentRoot>
  );
};

export default WeatherCard;
