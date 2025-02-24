import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCity({ setCities }) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCities((prevCities) => [...prevCities, { name, country, population }]);
    navigate("/cities"); // Redirect after adding city
  };

  return (
    <div>
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
            <label>Country:</label>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
        </div>
        <div>
            <label>Population:</label>
            <input type="text" value={population} onChange={(e) => setPopulation(e.target.value)} required />
        </div>
        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;
