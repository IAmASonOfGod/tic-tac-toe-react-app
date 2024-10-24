import React, { useContext } from "react";
import { Container } from "../../styles/General.style";
import { GameBoardStyles } from "./Game.styled";
import GameCell from "../../components/Header/GameCell/GameCell";
import { GameContext } from "../../contexts/GameContext";
import Player from "../../components/Header/Player/Player";

const Game = () => {
  const { game } = useContext(GameContext);
  return (
    <Container>
      <Player
        player={game.player1}
        isPlayerActive={game.player1.choice === game.turn}
      />
      <GameBoardStyles>
        {game.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} />
        ))}
      </GameBoardStyles>
      <Player
        player={game.player2}
        isPlayerActive={game.player2.choice === game.turn}
      />
    </Container>
  );
};

export default Game;
