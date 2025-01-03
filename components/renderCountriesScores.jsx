function sortScores(scores) {
  return scores.sort((a, b) => b.s - a.s);
}

function sortCountryScoresByName(countries) {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
}

function PlayersScore(country) {
  const sortedScores = sortScores(country.scores);
  return sortedScores.map((score) => (
    <tbody key={score.id}>
      <tr className="score">
        <td>{score.n.toUpperCase()}</td>
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
        <h2>
          High Scrores: <span className="country">{country.name}</span>
        </h2>
        <table className="score-table">{PlayersScore(country)}</table>
      </div>
    );
  });
}

export { HighScoreTable };
