import PlayerScores from "./PlayerScores";
import PropTypes from "prop-types";

export default function PlayersScores({ country }) {
  return (
    <table className="score-table">
      {country.scores.map((score) => (
        <PlayerScores key={score.id} {...score} />
      ))}
    </table>
  );
}

PlayersScores.propTypes = {
  country: PropTypes.object.isRequired,
};
