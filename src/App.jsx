import allCountryScores from "../data/scores.jsx";
import { HighScoreTable } from "../components/renderCountriesScores.jsx";
import "./App.css";
import { useState } from "react";

function sortCountryScoresByName(countries) {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
}

function sortScores(scores) {
  return scores.sort((a, b) => b.s - a.s);
}

function App() {
  const [btnTextContent, setBtnTextCont] = useState("Sort Scores Descending");

  // ensure ascending sort by default
  const [sortedScores, setSortedScores] = useState(
    sortCountryScoresByName(
      allCountryScores.map((country) => ({
        ...country,
        scores: sortScores(country.scores),
      }))
    )
  );

  function handlOnClick() {
    if (btnTextContent === "Sort Scores Descending") {
      setBtnTextCont("Sort Scores Ascending");
      setSortedScores(
        sortCountryScoresByName(
          allCountryScores.map((country) => ({
            ...country,
            scores: [...country.scores].sort((a, b) => a.s - b.s),
          }))
        )
      );
    } else {
      setBtnTextCont("Sort Scores Descending");
      setSortedScores(
        sortCountryScoresByName(
          allCountryScores.map((country) => ({
            ...country,
            scores: [...country.scores].sort((a, b) => b.s - a.s),
          }))
        )
      );
    }
  }

  return (
    <>
      <h1>High Scores per Country</h1>
      <button className="sort-btn" onClick={handlOnClick}>
        {btnTextContent}
      </button>
      <HighScoreTable allCountryScores={sortedScores} />
    </>
  );
}

export default App;
