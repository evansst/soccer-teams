const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const baseURL = `http://localhost:3000/teams`;
const teamURL = `${baseURL}/${id}`;

const $playerSection = document.querySelector('section');

fetch (teamURL)
  .then(parseJSON)
  .then(displayTeamName)
  .then(displayPlayers);

function parseJSON(response) {
  return response.json();
}

function displayTeamName(team) {
  const $title = document.querySelector('title');
  const $h1 = document.querySelector('h1');

  $title.innerText = team.name;
  $h1.innerText = team.name;

  return team;
}

function displayPlayers(team) {
  const players = team.players;

  players
    .map(playerToElement)
    .forEach(showPlayer);
}

function playerToElement(player) {
  const $playerName = document.createElement('h2');
  $playerName.innerHTML = `<a href=player.html?id=${player.id}>${player.name}</a>`;

  const $playerInfo = document.createElement('p');
  $playerInfo.innerHTML = `Number: ${player.number}`;
  
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