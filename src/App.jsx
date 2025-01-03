import allCountryScores from "../data/scores.jsx";
import "./App.css";

function sortScores(scores) {
  return scores.sort((a, b) => b.s - a.s);
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

function RenderScoresPerCountry(allCountryScores) {
  return allCountryScores.map((country) => {
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

function App() {
  return (
    <>
      <h1>High Scores per country</h1>
      <div>{RenderScoresPerCountry(allCountryScores)}</div>
    </>
  );
}

export default App;
