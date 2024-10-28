import React from "react";
import { Container, Subtitle, Title } from "../../styles/General.style";
import Button from "../../components/Header/Button/Button";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../contexts/sfxContext";
import { useContext } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Button
        onClick={() => {
          clickSfx();
          navigate("/game-on");
        }}
        onMouseEnter={() => hoverSfx()}
      >
        Play Now
      </Button>
    </Container>
  );
};

export default Home;
