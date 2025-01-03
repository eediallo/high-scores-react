import allCountryScores from "../data/scores.jsx";

function App() {
  const countriesList = allCountryScores.map((country) => {
    return (
      <>
        <h2>High Scrores: {country.name}</h2>
        <p key={crypto.randomUUID()}>{country.name}</p>;
      </>
    );
  });

  return (
    <>
      <h1>High Scores per country</h1>
      <div>{countriesList}</div>
    </>
  );
}

export default App;
