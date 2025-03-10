import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  margin: 0.5rem 0;
  padding: 0.5rem;
  font-size: 1rem;
  height: 100px;
`;

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

function EditRecipe() {
  const { id } = useParams(); // Get the recipe ID from URL parameters
  const [name, setName] = useState(''); // State to store recipe name
  const [ingredients, setIngredients] = useState(''); // State to store recipe ingredients
  const [instructions, setInstructions] = useState(''); // State to store recipe instructions
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
      .then(data => {
        setName(data.name); // Set recipe name in state
        setIngredients(data.ingredients.join(', ')); // Join ingredients array into string
        setInstructions(data.instructions); // Set recipe instructions in state
      })
      .catch(error => setError(error)); // Set error message in state
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = { name, ingredients: ingredients.split(','), instructions }; // Split ingredients string into array

    fetch(`https://glorious-capybara-jjrw767jw6r7fwxq-5000.app.github.dev/api/recipes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setName(''); // Reset name state
        setIngredients(''); // Reset ingredients state
        setInstructions(''); // Reset instructions state
        navigate('/'); // Navigate to the recipe list page after editing
      })
      .catch(error => setError(error)); // Set error message in state
  };

  if (error) {
    return <div>Error: {error.message}</div>; // Display error message
  }

  return (
    <div>
      <h1>Edit Recipe</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <Textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <Button type="submit">Update Recipe</Button>
      </Form>
    </div>
  );
}

export default EditRecipe;
