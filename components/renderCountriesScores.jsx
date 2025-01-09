const PlayersScore = (country) => {
  const sortedScores = country.scores;
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
};

const HighScoreTable = ({ allCountryScores }) => {
  return allCountryScores.map((country) => {
    return (
      <div className="scores-container" key={country.id}>
        <h2>
          High Scores: <span className="country">{country.name}</span>
        </h2>
        <table className="score-table">{PlayersScore(country)}</table>
      </div>
    );
  });
};

export { HighScoreTable };
