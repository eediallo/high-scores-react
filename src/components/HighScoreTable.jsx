import PlayerCountry from "./PlayerCountry";
import PlayersScores from "./PlayersScores";

const HighScoreTable = ({ allCountryScores }) => {
  return allCountryScores.map((country) => {
    return (
      <div className="scores-container" key={country.id}>
        <PlayerCountry id={country.id} name={country.name} />
        <PlayersScores country={country} />
      </div>
    );
  });
};

export { HighScoreTable };
