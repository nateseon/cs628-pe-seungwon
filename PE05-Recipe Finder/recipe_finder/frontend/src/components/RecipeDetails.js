import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  background: #007bff; /* Consistent background color */
  color: #fff; /* Consistent text color */
  border: none;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
  margin: 0.5rem; /* Add spacing between buttons */
`;

const StyledLink = styled(Link)`
  padding: 0.5rem;
  font-size: 1rem;
  background: #007bff; /* Consistent background color */
  color: #fff; /* Consistent text color */
  border: none;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
  text-decoration: none; /* Remove default underline of links */
  margin: 0.5rem; /* Add spacing between buttons */
`;

function RecipeDetails() {
  const { id } = useParams(); // Get the recipe ID from URL parameters
  const [recipe, setRecipe] = useState(null); // State to store recipe details
  const [error, setError] = useState(null); // State to store error message
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    fetch(`https://glorious-capybara-jjrw767jw6r7fwxq-5000.app.github.dev/api/recipes/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setRecipe(data)) // Set recipe data in state
      .catch(error => setError(error)); // Set error message in state
  }, [id]);

  const handleDelete = () => {
    fetch(`https://glorious-capybara-jjrw767jw6r7fwxq-5000.app.github.dev/api/recipes/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        navigate('/'); // Navigate to the recipe list page after deletion
      })
      .catch(error => setError(error)); // Set error message in state
  };

  if (error) {
    return <div>Error: {error.message}</div>; // Display error message
  }

  if (!recipe) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.instructions}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li> // Display ingredients
        ))}
      </ul>
      <StyledLink to={`/edit/${id}`}>Edit Recipe</StyledLink> 
      <Button onClick={handleDelete}>Delete Recipe</Button> 
    </div>
  );
}

export default RecipeDetails;
