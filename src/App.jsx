import allCountryScores from "../data/scores.jsx";

function sortScores(scores) {
  return scores.sort((a, b) => b.s - a.s);
}

function RenderScores(country) {
  const sortedScores = sortScores(country.scores);
  return sortedScores.map((score) => (
    <li key={crypto.randomUUID()}>
      {" "}
      {score.n} {score.s}
    </li>
  ));
}

function RenderScoresPerCountry(allCountryScores) {
  return allCountryScores.map((country) => {
    return (
      <>
        <h2>High Scrores: {country.name}</h2>
        <ul>{RenderScores(country)}</ul>
      </>
    );
  });
}

function App() {
  return (
    <>
      <h1>High Scores per country</h1>
      <div>{RenderScoresPerCountry(allCountryScores)}</div>
    </>
  );
}

export default App;
