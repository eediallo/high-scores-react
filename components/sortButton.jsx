import { useState } from "react";
import allCountryScores from "../data/scores";
import PropTypes from "prop-types";

function SortCountryScoresByName(countries) {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
}

function SortScores(scores, ascending = true) {
  return scores.sort((a, b) => (ascending ? b.s - a.s : a.s - b.s));
}

const SortButton = ({ setSortedScores }) => {
  let [btnTextContent, setBtnTextCont] = useState("Sort Scores Descending");

  function sortScoresAscending() {
    setSortedScores(
      SortCountryScoresByName(
        allCountryScores.map((country) => ({
          ...country,
          scores: [...SortScores(country.scores, false)],
        }))
      )
    );
  }

  function sortScoresDescending() {
    setBtnTextCont("Sort Scores Descending");
    setSortedScores(
      SortCountryScoresByName(
        allCountryScores.map((country) => ({
          ...country,
          scores: [...SortScores(country.scores)],
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
      <button className="sort-btn" onClick={handlOnClick}>
        {btnTextContent}
      </button>
    </>
  );
};

SortButton.propTypes = {
  setSortedScores: PropTypes.func.isRequired,
};

export { SortButton, SortScores, SortCountryScoresByName };
