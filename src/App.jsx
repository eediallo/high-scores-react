import allCountryScores from "../data/scores.jsx";
import { HighScoreTable } from "../components/renderCountriesScores.jsx";
import "./App.css";
import { useState } from "react";
import {
  SortButton,
  SortCountryScoresByName,
  SortScores,
} from "../components/sortButton.jsx";

function App() {
  const [sortedScores, setSortedScores] = useState(getSortedCountryScores());
  const getSortedCountryScores = () => {
    return SortCountryScoresByName(
      allCountryScores.map((country) => ({
        ...country,
        scores: SortScores(country.scores),
      }))
    );
  };

  return (
    <>
      <h1>High Scores per Country</h1>
      <SortButton setSortedScores={setSortedScores} />
      <HighScoreTable allCountryScores={sortedScores} />
    </>
  );
}

export default App;
