import allCountryScores from "../data/scores.jsx";
import { HighScoreTable } from "../components/renderCountriesScores.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [btnTextContent, setBtnTextCont] = useState("Sort Scores Descending");
  const [sortedScores, setSortedScores] = useState(allCountryScores);

  function handlOnClick() {
    if (btnTextContent === "Sort Scores Descending") {
      setBtnTextCont("Sort Scores Ascending");
      setSortedScores(
        allCountryScores.map((country) => ({
          ...country,
          scores: [...country.scores].sort((a, b) => b.s - a.s),
        }))
      );
    } else {
      setBtnTextCont("Sort Scores Descending");
      setSortedScores(
        allCountryScores.map((country) => ({
          ...country,
          scores: [...country.scores].sort((a, b) => a.s - b.s),
        }))
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
