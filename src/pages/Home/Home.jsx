import React from "react";
import { Container, Subtitle, Title } from "../../styles/General.style";
import Button from "../../components/Header/Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Button onClick={() => navigate("/game-on")}>Play Now</Button>
    </Container>
  );
};

export default Home;
