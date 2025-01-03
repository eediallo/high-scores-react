import allCountryScores from "../data/scores.jsx";
import { RenderScoresPerCountry } from "../components/renderCountriesScores.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>High Scores per country</h1>
      <div>{RenderScoresPerCountry(allCountryScores)}</div>
    </>
  );
}

export default App;
