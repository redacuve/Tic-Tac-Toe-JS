import Player from './player';
import { capitalize } from './helperFunctions';

export function getP1() {
  const node = document.querySelector('#player1');
  const name = node.value;
  const symbol = document.getElementsByName('symbol')[0].checked ? 'X' : 'O';
  const player = Player(name, symbol);
  return player;
}

export function getP2() {
  const node = document.querySelector('#player2');
  const name = node.value;
  const symbol = document.getElementsByName('symbol')[0].checked ? 'O' : 'X';
  const player = Player(name, symbol);
  return player;
}

export function sendAlert(textAlert) {
  alert(textAlert); // eslint-disable-line no-alert
}

export function displayPlayerName(player) {
  document.querySelector('.current-player').textContent = capitalize(
    player.getName(),
  );
}

export function displayTurn(player, index) {
  const elem = document.createElement('i');
  if (player.getSymbol() === 'X') {
    elem.classList = 'fas fa-times fa-7x';
  } else {
    elem.classList = 'far fa-circle fa-7x';
  }
  elem.id = `i-row-${index}`;
  document.querySelector(`#row-${index}`).appendChild(elem);
}

export function hidePlayersName() {
  document.querySelector('#players-name').classList.add('hide');
}

export function showGameboard() {
  document.querySelector('#game-board').classList.remove('hide');
}

export function changeSubtitleLabel(text) {
  document.querySelector('#title-gameboard').textContent = text;
}

export function hidePlayerLabel() {
  document.querySelector('.has-text-weight-bold.h3').classList.add('hide');
}

export function showPlayerLabel() {
  document.querySelector('.has-text-weight-bold.h3').classList.remove('hide');
}

export function showNewGameButton() {
  document.querySelector('#newgame').classList.remove('hide');
}

export function hideNewGameButton() {
  document.querySelector('#newgame').classList.add('hide');
}

export function clearRows() {
  for (let i = 0; i <= 8; i += 1) {
    document.querySelector(`#row-${i}`).textContent = '';
  }
}
