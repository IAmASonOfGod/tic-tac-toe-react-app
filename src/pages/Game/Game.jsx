import React, { useContext } from "react";
import { Container } from "../../styles/General.style";
import { GameBoardStyles } from "./Game.styled";
import GameCell from "../../components/Header/GameCell/GameCell";
import { GameContext } from "../../contexts/GameContext";

const Game = () => {
  const { game } = useContext(GameContext);
  return (
    <Container>
      <GameBoardStyles>
        {game.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} />
        ))}
      </GameBoardStyles>
    </Container>
  );
};

export default Game;
