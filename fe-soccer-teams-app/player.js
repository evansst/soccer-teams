const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const baseURL = `http://localhost:3000/players`;
const playerURL = `${baseURL}/${id}`;

const $infoSection = document.querySelector('section');

fetch(playerURL)
  .then(parseJSON)
  .then(displayPlayerName)
  .then(displayPlayerInfo);

function parseJSON(response) {
  return response.json();
}

function displayPlayerName(player) {
  const $title = document.querySelector('title');
  const $h1 = document.querySelector('h1');

  $title.innerText = player.name;
  $h1.innerText = player.name;

  return player;
}

function displayPlayerInfo(player) {
  const $teamCard = infoToElement(player, 'Team:', player.team.name);
  const $positionCard = infoToElement(player, 'Position:', player.position);
  const $numberCard = infoToElement(player, 'Number:', player.number);

  $infoSection.append($teamCard, $positionCard, $numberCard);

}

function createInfoCard($header, $info) {
  const $infoCard = document.createElement('div');
  $infoCard.append($header, $info);

  return $infoCard;
}

function infoToElement(player, headerString, info) {
  const $header = document.createElement('h4');
  $header.textContent = headerString;
  
  const $info = document.createElement('p');
  $info.textContent = info;

  return createInfoCard($header, $info);
}
