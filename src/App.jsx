import allCountryScores from "../data/scores.jsx";
import { HighScoreTable } from "../components/renderCountriesScores.jsx";
import "./App.css";
import { useState } from "react";

function sortCountryScoresByName(countries) {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
}

function sortScores(scores, ascending = true) {
  return scores.sort((a, b) => (ascending ? b.s - a.s : a.s - b.s));
}

function App() {
  const [btnTextContent, setBtnTextCont] = useState("Sort Scores Descending");
  // ensure ascending sort by default
  const [sortedScores, setSortedScores] = useState(getSortedCountryScores());

  function getSortedCountryScores() {
    return sortCountryScoresByName(
      allCountryScores.map((country) => ({
        ...country,
        scores: sortScores(country.scores),
      }))
    );
  }

  function sortScoresAscending() {
    setSortedScores(
      sortCountryScoresByName(
        allCountryScores.map((country) => ({
          ...country,
          scores: [...sortScores(country.scores, false)],
        }))
      )
    );
  }

  function sortScoresDescending() {
    setBtnTextCont("Sort Scores Descending");
    setSortedScores(
      sortCountryScoresByName(
        allCountryScores.map((country) => ({
          ...country,
          scores: [...sortScores(country.scores)],
        }))
      )
    );
  }

  function handlOnClick() {
    if (btnTextContent === "Sort Scores Descending") {
      setBtnTextCont("Sort Scores Ascending");
      sortScoresAscending();
    } else {
      sortScoresDescending();
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
