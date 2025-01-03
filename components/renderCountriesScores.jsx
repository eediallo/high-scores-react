
function sortScores(scores) {
  return scores.sort((a, b) => b.s - a.s);
}

function sortCountryScoresByName(countries) {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
}

function RenderScores(country) {
  const sortedScores = sortScores(country.scores);
  return sortedScores.map((score) => (
    <li className="score" key={crypto.randomUUID()}>
      {" "}
      {score.n} <span className="high-score">{score.s}</span>
    </li>
  ));
}

function HighScoreTable(allCountryScores) {
  const sortedCountriesByName = sortCountryScoresByName(allCountryScores);
  return sortedCountriesByName.map((country) => {
    return (
      <>
        <div className="scores-container">
          <h2>High Scrores: {country.name}</h2>
          <ul>{RenderScores(country)}</ul>
        </div>
      </>
    );
  });
}

export {HighScoreTable}
