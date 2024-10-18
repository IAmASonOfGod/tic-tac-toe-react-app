import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  background-color: ${(props) => {
    return props.theme.colors.primary;
  }};
  padding: 0 1rem;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) => {
    return props.theme.colors.text;
  }};
  font-size: 3rem;
  font-family: "Pacifico", cursive;
  background-color: transparent;
`;

export const Subtitle = styled.h1`
  color: ${(props) => {
    return props.theme.colors.text;
  }};z
  font-size: 1.5rem;
  font-weight: 200;
  background-color: transparent;
`;
