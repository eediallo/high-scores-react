import PropTypes from "prop-types";

export default function PlayerCountry({ name }) {
  return (
    <h2>
      High Scores: <span className="country">{name}</span>
    </h2>
  );
}

PlayerCountry.propTypes = {
  name: PropTypes.string.isRequired,
};
