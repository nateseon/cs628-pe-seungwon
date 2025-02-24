import React from "react";
import { useParams } from "react-router-dom";

function CityDetails({ cities }) {
  const { cityName } = useParams();
  const city = cities.find((c) => c.name === cityName);

  if (!city) {
    return <h2>City not found!</h2>;
  }

  return (
    <div>
      <h2>{city.name} Details</h2>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population}</p>
    </div>
  );
}

export default CityDetails;
