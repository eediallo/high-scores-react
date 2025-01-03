function sortScores(scores) {
  return scores.sort((a, b) => b.s - a.s);
}

function sortCountryScoresByName(countries) {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
}

function PlayersScore(country) {
  const sortedScores = sortScores(country.scores);
  return sortedScores.map((score) => (
    <tbody className="score-table" key={score.id}>
      <tr className="score">
        <td>{score.n}</td>
        <td>
          <span className="high-score">{score.s}</span>
        </td>
      </tr>
    </tbody>
  ));
}

function HighScoreTable(allCountryScores) {
  const sortedCountriesByName = sortCountryScoresByName(allCountryScores);
  return sortedCountriesByName.map((country) => {
    return (
      <div className="scores-container" key={country.id}>
        <h2>High Scrores: {country.name}</h2>
        <table>{PlayersScore(country)}</table>
      </div>
    );
  });
}

export { HighScoreTable };
