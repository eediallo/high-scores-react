import PropTypes from "prop-types";
import Section from "../Section";
import "./PlayerScores.css";

export default function PlayerScores({ n, s }) {
  return (
    <tbody>
      <Section className="score" SectionContainer="tr">
        <td>{n.toUpperCase()}</td>
        <td>
          <span className="high-score">{s}</span>
        </td>
      </Section>
    </tbody>
  );
}

PlayerScores.propTypes = {
  n: PropTypes.string.isRequired,
  s: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
