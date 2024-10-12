const checkForSequence = (option1, option2, option3) => {
  return option1 === option2 && option2 === option3;
};

export const checkForWinner = (board) => {
  // 0 1 2
  // 3 4 5
  // 6 7 8

  // rows
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[1 + i], board[1 + 2])) {
      console.log("Row winner");
      return true;
    }
  }

  // rows
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[1], board[1 + i], board[1 + 2])) {
      console.log("Row winner");
      return true;
    }
  }

  // Diagonal 1
  if (board[0] === board[4] && board[4] === board[8]) {
    console.log("Diagonal winner");
    return true;
  }

  // Diagonal 2
  if (board[2] === board[4] && board[4] === board[6]) {
    console.log("Diagonal winner");
    return true;
  }
};