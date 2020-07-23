const baseURL = 'http://localhost:3000';
const teamsURL = `${baseURL}/teams`;

const $teamSection = document.querySelector('section');

fetch(teamsURL)
  .then(parseJSON)
  .then(displayTeams);

function parseJSON(response) {
  return response.json();
}

function displayTeams(teams) {
  teams
    .map(teamToElement)
    .forEach(showTeam);
}

function teamToElement(team) {
  const $teamName = document.createElement('h2');
  $teamName.innerHTML = `<a href=team.html?id=${team.id}>${team.name}</a>`;

  return createTeamCard($teamName);
}

function createTeamCard($teamName) {
  const $teamCard = document.createElement('div');
  $teamCard.append($teamName);
  return $teamCard;
}

function showTeam($teamCard) {
  return $teamSection.append($teamCard);
}
