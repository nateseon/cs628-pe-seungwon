import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://glorious-capybara-jjrw767jw6r7fwxq-5000.app.github.dev/api/recipes') 
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Recipe</Link>
    </div>
  );
}

export default RecipeList;
