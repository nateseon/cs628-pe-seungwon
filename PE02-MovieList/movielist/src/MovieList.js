import React, { useState } from "react";
import "./App.css";

const MovieList = () => {
  // Create movie objects
  const movies = [
    { Title: "Avengers: Endgame", Genre: "Action", ReleaseYear: 2019 },
    { Title: "The Dictator", Genre: "Comedy", ReleaseYear: 2012 },
    { Title: "Spider-Man 2", Genre: "Action", ReleaseYear: 2004 },
    { Title: "The Dark Knight", Genre: "Action", ReleaseYear: 2008 },
    { Title: "The Notebook", Genre: "Romance", ReleaseYear: 2004 },
  ];

  // Use state to manage movies and selected genre
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  // Get specific genres for the dropdown
  const genres = ["All Genres", ...new Set(movies.map((movie) => movie.Genre))];

  // Filter movies based on selected genre
  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.Genre === selectedGenre);

  // Handle movie click event
  const handleMovieClick = (title) => {
    alert(`Movie Title: ${title}`);
  };

  return (
    <div className="movie-list-container">
      <h1>Movie List</h1>

      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <ul className="movie-list">
        {filteredMovies.map((movie, index) => (
          <li
            key={index}
            className="movie-card"
            onClick={() => handleMovieClick(movie.Title)}
          >
            <h2>{movie.Title}</h2>
            <p>Genre: {movie.Genre}</p>
            <p>Release Year: {movie.ReleaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
