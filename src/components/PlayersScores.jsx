import PlayerScores from "./PlayerScores";
import PropTypes from "prop-types";

export default function PlayersScores({ country }) {
  const sortedScores = country.scores;
  return (
    <table className="score-table">
      {sortedScores.map((score) => (
        <PlayerScores key={score.id} {...score} />
      ))}
    </table>
  );
}

PlayersScores.propTypes = {
  country: PropTypes.object.isRequired,
};
