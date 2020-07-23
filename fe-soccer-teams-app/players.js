const searchParams = new URLSearchParams(window.location.search);
const searchName = searchParams.get('name');

const baseURL = `http://localhost:3000/`;
let playersURL = `${baseURL}/players`;

if (searchName) {
  playersURL = `${playersURL}?name=${searchName}`;
}

const $playerSection = document.querySelector('section');

fetch (playersURL)
  .then(parseJSON)
  .then(displayHeaders)
  .then(displayPlayers);

function parseJSON(response) {
  return response.json();
}

function displayHeaders(players) {
  const $title = document.querySelector('title');
  const $h1 = document.querySelector('h1');

  $title.innerText = 'Players';
  $h1.innerText = 'Players:';

  return players;
}

function displayPlayers(players) {
  players
    .map(playerToElement)
    .forEach(showPlayer);
}

function playerToElement(player) {
  const $playerName = document.createElement('h2');
  $playerName.innerHTML = `<a href=player.html?id=${player.id}>${player.name}</a>`;

  const $playerInfo = document.createElement('p');
  $playerInfo.innerText = player.team.name;
  
  return createPlayerCard($playerName, $playerInfo);
}

function createPlayerCard($playerName, $playerInfo) {
  const $playerCard = document.createElement('div');
  $playerCard.append($playerName, $playerInfo);
  return $playerCard;
}

function showPlayer($playerCard) {
  return $playerSection.append($playerCard);
}