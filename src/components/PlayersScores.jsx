import PlayerScores from "./PlayerScores/PlayerScores";
import PropTypes from "prop-types";
import Section from "./Section";

export default function PlayersScores({ country }) {
  return (
    <Section className="score-table" SectionContainer="table">
      {country.scores.map((score) => (
        <PlayerScores key={score.id} {...score} />
      ))}
    </Section>
  );
}

PlayersScores.propTypes = {
  country: PropTypes.object.isRequired,
};
