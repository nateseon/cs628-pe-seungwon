import React from "react";
import { Link } from "react-router-dom";

function CitiesList({ cities }) {
  return (
    <div>
      <h2>Cities List</h2>
      {cities.map((city, index) => (
        <p key={index}>
          <Link to={`/cities/${city.name}`}>{city.name}</Link>
        </p>
      ))}
    </div>
  );
}

export default CitiesList;
