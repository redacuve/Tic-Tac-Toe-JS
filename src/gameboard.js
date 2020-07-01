const Gameboard = (player1, player2) => {
  let board = [null, null, null, null, null, null, null, null, null];

  const winStatus = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let winFor = false;

    winner.forEach((element) => {
      if (
        board[element[0]] === 'X'
        && board[element[1]] === 'X'
        && board[element[2]] === 'X'
      ) {
        winFor = 'X';
      } else if (
        board[element[0]] === 'O'
        && board[element[1]] === 'O'
        && board[element[2]] === 'O'
      ) {
        winFor = 'O';
      }
    });

    if (!board.includes(null) && !winFor) {
      winFor = 'T';
    }
    return winFor;
  };

  const validateMove = (i) => {
    if (board[i] === null) {
      return true;
    }
    return false;
  };

  const sendMove = (turn, i) => {
    if (turn) {
      board[i] = player1.getSymbol();
    } else {
      board[i] = player2.getSymbol();
    }
  };

  const getPlayer1 = () => player1;

  const getPlayer2 = () => player2;

  const clearBoard = () => {
    board = [null, null, null, null, null, null, null, null, null];
  };

  return {
    winStatus,
    validateMove,
    sendMove,
    getPlayer1,
    getPlayer2,
    clearBoard,
  };
};

export default Gameboard;
