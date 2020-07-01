import {sendAlert} from './domHandler';

const Gameboard = (player1, player2) => {
  let board = [null, null, null, null, null, null, null, null, null];
  let xTurn = true;

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
  }

  const validateMove = (i) =>{
    if (board[i] === null){
      return true;
    } else {
      return false;
    }
  }

  const sendMove = (turn, i) => {
    if (turn){
      board[i] = player1.getSymbol();
    } else {
      board[i] = player2.getSymbol();
    }
  }

  const move = (indx) => {
    if (validateMove(indx)){
      sendMove(xturn, indx);
      xturn = !xturn;
    } else {
      sendAlert('This place is already taken');
    }


    if (board[indx] === null){
      if (movX) {
        board[index] = 'X';
        if (player1.getSymbol() === 'O') {
          DisplayController().changeName(player1.getName());
        } else {
          DisplayController().changeName(player2.getName());
        }
        DisplayController().addSymbol('X', index);
        movX = !movX;
      } else {
        board[index] = 'O';
        if (player1.getSymbol() === 'X') {
          DisplayController().changeName(player1.getName());
        } else {
          DisplayController().changeName(player2.getName());
        }
        DisplayController().addSymbol('O', index);
        movX = !movX;
      }
    } else {
      sendAlert('This place is already taken');
    }
  }

  const getPlayer1 = () =>{
    return player1;
  }

  const getPlayer2 = () => {
    return player2;
  }

  const gameFinish = () => {
    console.log("gamefinish")
  }

  return { winStatus, validateMove, sendMove, getPlayer1, getPlayer2, gameFinish };
};

export default Gameboard;
