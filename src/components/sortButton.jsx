import { useState } from "react";
import allCountryScores from "../../data/scores";
import PropTypes from "prop-types";

const SortCountryScoresByName = (countries) => {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
};

const SortScores = (scores, ascending = true) => {
  return scores.sort((a, b) => (ascending ? b.s - a.s : a.s - b.s));
};

const SortButton = ({ setSortedScores }) => {
  let [btnTextContent, setBtnTextCont] = useState("Sort Scores Descending");

  const sortScoresAscending = () => {
    setSortedScores(
      SortCountryScoresByName(
        allCountryScores.map((country) => ({
          ...country,
          scores: [...SortScores(country.scores, false)],
        }))
      )
    );
  };

  const sortScoresDescending = () => {
    setBtnTextCont("Sort Scores Descending");
    setSortedScores(
      SortCountryScoresByName(
        allCountryScores.map((country) => ({
          ...country,
          scores: [...SortScores(country.scores)],
        }))
      )
    );
  };

  const handleClick = () => {
    if (btnTextContent === "Sort Scores Descending") {
      setBtnTextCont("Sort Scores Ascending");
      sortScoresAscending();
    } else {
      sortScoresDescending();
    }
  };

  return (
    <>
      <button className="sort-btn" onClick={handleClick}>
        {btnTextContent}
      </button>
    </>
  );
};

SortButton.propTypes = {
  setSortedScores: PropTypes.func.isRequired,
};

export { SortButton, SortScores, SortCountryScoresByName };
