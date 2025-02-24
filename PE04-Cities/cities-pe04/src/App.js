import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CitiesList from "./CitiesList";
import AddCity from "./AddCity";
import CityDetails from "./CityDetails";

function App() {
  const [cities, setCities] = useState([
    { name: "Seattle", country: "USA", population: "733,919" },
  ]);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/cities">Cities List</Link> | <Link to="/add-city">Add City</Link>
        </nav>

        <Routes>
          <Route path="/cities" element={<CitiesList cities={cities} />} />
          <Route path="/add-city" element={<AddCity setCities={setCities} />} />
          <Route path="/cities/:cityName" element={<CityDetails cities={cities} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
