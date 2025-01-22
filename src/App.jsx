import allCountryScores from "../data/scores.js";
import HighScoreTable from "./components/HighScoreTable.jsx";
import "./App.css";
import { useState } from "react";
import {
  SortButton,
  SortCountryScoresByName,
  SortScores,
} from "./components/SortButton.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [sortedCountryScores, setSortedCountryScores] = useState(
    getSortedCountryScores()
  );

  function getSortedCountryScores() {
    return SortCountryScoresByName(
      allCountryScores.map((country) => ({
        ...country,
        scores: SortScores(country.scores),
      }))
    );
  }

  return (
    <>
      <Header />
      <SortButton setSortedCountryScores={setSortedCountryScores} />
      <HighScoreTable countries={sortedCountryScores} />
    </>
  );
}

export default App;
