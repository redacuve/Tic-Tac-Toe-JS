import "./style.css";

import { getPlayer1, getPlayer2, sendAlert, displayPlayerName, showGameboard, hidePlayersName, changeSubtitleLabel } from "./domHandler";
import { validPlayers } from "./helperFunctions";
import Gameboard from './gameboard';

let gboard;

function moveTo(e) {
  console.log("moved to");
  console.log(e);
}

function startGame(e) {
  let player1 = getPlayer1();
  let player2 = getPlayer2();
  if (validPlayers(player1, player2)) {
    gboard = Gameboard(player1,player2);
    displayPlayerName(player1);
    hidePlayersName();
    showGameboard();
    changeSubtitleLabel('Game Started');
  } else {
    sendAlert("Player's name can't be blank")
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
  document.getElementById("row-0").addEventListener("click", moveTo);
  document.getElementById("row-1").addEventListener("click", moveTo);
  document.getElementById("row-2").addEventListener("click", moveTo);
  document.getElementById("row-3").addEventListener("click", moveTo);
  document.getElementById("row-4").addEventListener("click", moveTo);
  document.getElementById("row-5").addEventListener("click", moveTo);
  document.getElementById("row-6").addEventListener("click", moveTo);
  document.getElementById("row-7").addEventListener("click", moveTo);
  document.getElementById("row-8").addEventListener("click", moveTo);
}

addAllListeners();
