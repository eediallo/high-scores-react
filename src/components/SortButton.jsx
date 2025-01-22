import { useState } from "react";
import allCountryScores from "../../data/scores";
import PropTypes from "prop-types";
import Section from "./Section";

function SortCountryScoresByName(countries) {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
}

function SortScores(scores, ascending = true) {
  return scores.sort((a, b) => (ascending ? b.s - a.s : a.s - b.s));
}

function SortButton({ setSortedCountryScores }) {
  let [btnTextContent, setBtnTextCont] = useState("Sort Scores Descending");

  function sortScoresAscending() {
    setSortedCountryScores(
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
    setSortedCountryScores(
      SortCountryScoresByName(
        allCountryScores.map((country) => ({
          ...country,
          scores: [...SortScores(country.scores)],
        }))
      )
    );
  }

  function handleClick() {
    if (btnTextContent === "Sort Scores Descending") {
      setBtnTextCont("Sort Scores Ascending");
      sortScoresAscending();
    } else {
      sortScoresDescending();
    }
  }

  return (
    <>
      <Section
        className="sort-btn"
        onClick={handleClick}
        SectionContainer="button"
      >
        {btnTextContent}
      </Section>
    </>
  );
}

SortButton.propTypes = {
  setSortedCountryScores: PropTypes.func.isRequired,
};

export { SortButton, SortScores, SortCountryScoresByName };
