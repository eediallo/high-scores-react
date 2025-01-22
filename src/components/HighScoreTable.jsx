import PlayerCountry from "./PlayerCountry";
import PlayersScores from "./PlayersScores";
import PropTypes from "prop-types";

export default function HighScoreTable({ countries }) {
  return (
    <>
      {countries.map((country) => (
        <div className="scores-container" key={country.id}>
          <PlayerCountry id={country.id} {...country} />
          <PlayersScores country={country} />
        </div>
      ))}
    </>
  );
}

HighScoreTable.propTypes = {
  countries: PropTypes.array.isRequired,
};
