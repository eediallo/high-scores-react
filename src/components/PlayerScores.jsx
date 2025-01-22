import PropTypes from "prop-types";

export default function PlayerScores({ n, s }) {
  return (
    <tbody>
      <tr className="score">
        <td>{n.toUpperCase()}</td>
        <td>
          <span className="high-score">{s}</span>
        </td>
      </tr>
    </tbody>
  );
}

PlayerScores.propTypes = {
  n: PropTypes.string.isRequired,
  s: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
