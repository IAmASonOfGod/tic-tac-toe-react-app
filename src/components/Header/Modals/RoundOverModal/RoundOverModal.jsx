import React, { useContext } from "react";
import { Title, Subtitle } from "../../../../styles/General.style";
import { ModalHeader, ModalBody, ModalFooter } from "../../Modal/Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../../contexts/GameContext";
import { ModalContext } from "../../../../contexts/modalContext";

const RoundOverModal = () => {
  const { resetBoard } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  return (
    <>
      <ModalHeader>
        <Title>Lesego Wins Round</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle>
          Lesego won this round! Choices will be switched now.
        </Subtitle>
        <Subtitle>Lesego: 1</Subtitle>
        <Subtitle>Mbeki: 1</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            handleModal();
            resetBoard();
          }}
        >
          Continue
        </Button>
        <Button color="#8437f9">Restart</Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
