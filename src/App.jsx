import allCountryScores from "../data/scores.jsx";
import { HighScoreTable } from "../components/renderCountriesScores.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>High Scores per country</h1>
      <div>{HighScoreTable(allCountryScores)}</div>
    </>
  );
}

export default App;
