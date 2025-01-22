import PlayerCountry from "./PlayerCountry";
import PlayersScores from "./PlayersScores";
import PropTypes from "prop-types";
import Section from "./Section";

export default function HighScoreTable({ countries }) {
  return (
    <>
      {countries.map((country) => (
        <Section
          className="scores-container"
          key={country.id}
          SectionContainer="section"
        >
          <PlayerCountry id={country.id} {...country} />
          <PlayersScores country={country} />
        </Section>
      ))}
    </>
  );
}

HighScoreTable.propTypes = {
  countries: PropTypes.array.isRequired,
};
