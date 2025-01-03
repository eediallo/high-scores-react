import allCountryScores from "../data/scores.jsx";

function App() {
  const countriesList = allCountryScores.map((country) => {
    return <li key={crypto.randomUUID()}>{country.name}</li>;
  });

  return (
    <>
      <h1>High Scores per country</h1>
      {countriesList}
    </>
  );
}

export default App;
