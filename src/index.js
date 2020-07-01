import "./style.css";

import {
  getP1,
  getP2,
  sendAlert,
  displayPlayerName,
  showGameboard,
  hidePlayersName,
  changeSubtitleLabel,
  displayTurn,
} from "./domHandler";
import { validPlayers } from "./helperFunctions";
import Gameboard from "./gameboard";

let gboard;
let xturn = true;

function moveTo(event) {
  const indx = event.target.id.match(/\d+/)[0];
  let winner = gboard.winStatus();
  if (!winner) {
    if (gboard.validateMove(indx)) {
      gboard.sendMove(xturn, indx);
      if (xturn) {
        displayTurn(gboard.getPlayer1(), indx);
        displayPlayerName(gboard.getPlayer2());
        
      } else {
        displayTurn(gboard.getPlayer2(), indx);
        displayPlayerName(gboard.getPlayer1());
      }
      xturn = !xturn;
    } else {
      sendAlert("This place is already taken");
    }
  }
  winner = gboard.winStatus();
  if (winner) {
    gboard.gameFinish();
  }
}

function startGame(e) {
  let player1 = getP1();
  let player2 = getP2();
  if (validPlayers(player1, player2)) {
    gboard = Gameboard(player1, player2);
    displayPlayerName(player1);
    hidePlayersName();
    showGameboard();
    changeSubtitleLabel("Game Started");
  } else {
    sendAlert("Player's name can't be blank");
  }
}

function resetGame(e) {
  console.log("reset Game");
  console.log(e);
}

function newGame(e) {
  console.log("new game");
  console.log(e);
}

function addAllListeners() {
  document
    .querySelector(".button.is-primary.is-inverted")
    .addEventListener("click", startGame);
  document
    .querySelector(".button.is-danger.is-rounded")
    .addEventListener("click", resetGame);
  document.querySelector("#newgame .button").addEventListener("click", newGame);
  document.getElementById("row-0").addEventListener("click", moveTo, true);
  document.getElementById("row-1").addEventListener("click", moveTo, true);
  document.getElementById("row-2").addEventListener("click", moveTo, true);
  document.getElementById("row-3").addEventListener("click", moveTo, true);
  document.getElementById("row-4").addEventListener("click", moveTo, true);
  document.getElementById("row-5").addEventListener("click", moveTo, true);
  document.getElementById("row-6").addEventListener("click", moveTo, true);
  document.getElementById("row-7").addEventListener("click", moveTo, true);
  document.getElementById("row-8").addEventListener("click", moveTo, true);
}

addAllListeners();
