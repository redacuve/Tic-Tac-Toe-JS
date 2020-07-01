export function validPlayers(player1, player2) {
  if (player1.name === '' || player2.name === '') {
    return false;
  }
  return true;
}

export function capitalize(str) {
  let str2 = '';
  let firstLetter = true;
  let i = 0;
  str = str.toLowerCase();
  while (i < str.length) {
    if (str[i].match(/[a-z]/i) && firstLetter) {
      str2 += str[i].toUpperCase();
      firstLetter = false;
    } else {
      str2 += str[i];
    }
    i += 1;
  }
  return str2;
}

export function getWinner(winner, board) {
  const p1Sym = board.getPlayer1().getSymbol();
  let str = '';
  switch (winner) {
    case 'X':
      if (p1Sym === 'X') {
        str = `You Won ${capitalize(board.getPlayer1().getName())}`;
      } else {
        str = `You Won ${capitalize(board.getPlayer2().getName())}`;
      }
      return str;
    case 'O':
      if (p1Sym === 'X') {
        str = `You Won ${capitalize(board.getPlayer2().getName())}`;
      } else {
        str = `You Won ${capitalize(board.getPlayer1().getName())}`;
      }
      return str;
    case 'T':
      str = "It's a Tie";
      return str;
    default:
      str = 'GAMEOVER';
      return str;
  }
}
