export function getPlayer1() {
  let player = { 'name': null, "symbol": null }
  let node = document.querySelector('#player1');
  player.name = node.value;
  player.symbol = document.getElementsByName('symbol')[0].checked ? 'X': 'O';
  return player;
}

export function getPlayer2() {
  let player = { 'name': null, "symbol": null }
  let node = document.querySelector('#player2');
  player.name = node.value;
  player.symbol = document.getElementsByName('symbol')[0].checked ? 'O': 'X';
  return player;
}

export function sendAlert(textAlert){
  alert(textAlert); // eslint-disable-line no-alert
}
