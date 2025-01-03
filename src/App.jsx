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
      {score.n} {score.s}
    </li>
  ));
}

function RenderScoresPerCountry(allCountryScores) {
  return allCountryScores.map((country) => {
    return (
      <>
        <h2>High Scrores: {country.name}</h2>
        <ul className="scores">{RenderScores(country)}</ul>
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
