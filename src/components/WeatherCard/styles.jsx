import styled from "styled-components";

export const ContentRoot = styled.div`
  width: 200px;
  margin-top: 50px;
`;
export const SettingSection = styled.div`
  color: black;
  display: flex;
  width: 250px;
  flex-direction: column;
  align-items: center;
`;
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  color: #143642;
  background-color: #f2f7f2;

  font-family: Helvetica;
  width: 250px;
  height: 200px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const DefaultSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #143642;
  background-color: #f2f7f2;
  font-family: Helvetica;
  width: 250px;
  height: 200px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const Select = styled.select`
  color: #0f8b8d;
  width: 200px;
  height: 40px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 6px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f2f7f2;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #3c6e71;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #0f8b8d;
  }
`;
export const Option = styled.option`
  color: black;
  width: 200px;
`;

export const Title = styled.div`
  margin-bottom: 25px;
  padding: 10px;
  font-size: 20px;
  color: #0f8b8d;
`;

export const InfoRow = styled.div``;
