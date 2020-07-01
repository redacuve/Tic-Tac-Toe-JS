export function validPlayers(player1, player2) {
  if (player1.name === "" || player2.name === "") {
    return false;
  }
  return true;
}

export function getWinner(winner, board) {
  let p1Sym = board.getPlayer1().getSymbol();
  let str = "";
  switch (winner) {
    case "X":
      if (p1Sym === "X"){
        str = `You Won ${board.getPlayer1().getName()}`;
      } else {
        str = `You Won ${board.getPlayer2().getName()}`;
      }
      return str; 
    case "O":
      if (p1Sym === "X"){
        str = `You Won ${board.getPlayer2().getName()}`;
      } else {
        str = `You Won ${board.getPlayer1().getName()}`;
      }
      return str;
    case "T":
      str = "It's a Tie";
      return str;
    default:
      str = "GAMEOVER"
      return str;
  }
}
