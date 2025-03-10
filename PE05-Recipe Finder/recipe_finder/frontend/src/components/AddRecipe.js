import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  background: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

function AddRecipe() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { name, ingredients: ingredients.split(','), instructions };

    fetch('https://glorious-capybara-jjrw767jw6r7fwxq-5000.app.github.dev/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(data => {
      setName('');
      setIngredients('');
      setInstructions('');
      navigate('/');
    }).catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };

  return (
    <div>
      <h1>Add Recipe</h1>
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
        <Button type="submit">Add Recipe</Button>                
      </Form>
    </div>
  );
}

export default AddRecipe;
