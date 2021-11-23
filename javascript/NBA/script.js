const teams = [
  {
    awayTeam: {
      team: "Atlanta Hawks",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Boston Celtics",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Brooklyn Nets",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Charlotte Hornets",
      points: 90,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Chicago Bulls",
      points: 88,
      isWinner: true,
    },
    awayTeam: {
      team: "Cleveland Cavaliers",
      points: 87,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Dallas Mavericks",
      points: 82,
      isWinner: true,
    },
    awayTeam: {
      team: "Denver Nuggets",
      points: 81,
      isWinner: false,
    },
  },
];

const ulParent = document.createElement("ul");
for (let team of teams) {
  const { awayTeam, homeTeam } = team;

  const gameLi = document.createElement("li");
  const { team: awayTeamName, points: awayTeamPoints } = awayTeam;
  const { team: homeTeamName, points: homeTeamPoints } = homeTeam;
  const teamsNames = `${awayTeamName}  @ ${homeTeamName} `;
  let scoreLine;
  if (awayTeamPoints > homeTeamPoints) {
    scoreLine = `<b>${awayTeamPoints}</b> - ${homeTeamPoints} `;
  } else {
    scoreLine = `${awayTeamPoints} - <b>${homeTeamPoints}</b> `;
  }

 

  gameLi.innerHTML = `${teamsNames} ${scoreLine}`;

  ulParent.append(gameLi);
}
document.body.append(ulParent);
