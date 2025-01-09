import allCountryScores from "../data/scores.jsx";
import { HighScoreTable } from "../components/renderCountriesScores.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>High Scores per Country</h1>
      <HighScoreTable allCountryScores={allCountryScores} />
    </>
  );
}

export default App;
