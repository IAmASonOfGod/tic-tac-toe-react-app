import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../../contexts/GameContext";
import { checkForWinner } from "../../../utils/GameUtils";
import { ReactComponent as XIcon } from "../../../assets/svgs/Icon-X.svg";
import { ReactComponent as XIconOutlined } from "../../../assets/svgs/Icon-X-outlined.svg";
import { ReactComponent as OIcon } from "../../../assets/svgs/Icon-O.svg";
import { ReactComponent as OIconOutlined } from "../../../assets/svgs/Icon-O-outlined.svg";
import RoundOverModal from "../Modals/RoundOverModal/RoundOverModal";
import { ModalContext } from "../../../contexts/modalContext";
import { SfxContext } from "../../../contexts/sfxContext";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { hoverSfx, clickSfx, winSfx, completedSfx } = useContext(SfxContext);
  const { handleModal } = useContext(ModalContext);

  const cellClickHandler = () => {
    clickSfx();
    updateBoard(index);
    const result = checkForWinner(game.board);
    if (result) {
      roundComplete(result);
      if (result !== "draw") {
        winSfx();
      } else {
        completedSfx();
      }
      handleModal(<RoundOverModal />);
    }
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        <XIcon className="markedItem" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <OIcon className="markedItem" />
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={cellClickHandler} onMouseEnter={() => hoverSfx()}>
      {game.turn === "x" ? (
        <XIconOutlined className="outlineIcon" />
      ) : (
        <OIconOutlined className="outlineIcon" />
      )}
    </CellStyle>
  );
};

export default GameCell;
