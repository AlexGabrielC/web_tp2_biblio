import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function Recipe({ recipes, deleteRecipe }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const findRecipeById = (recipeId) => {
    return recipes.find(recipe => recipe.id === recipeId);
  };

  const currentRecipe = findRecipeById(id);

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/');
  };

  return (
    <div>
      {currentRecipe ? (
        <div>
          <h2>{currentRecipe.title}</h2>
          <img src={currentRecipe.image} alt={currentRecipe.title} />
          <p>Temps: {currentRecipe.time}</p>
          <h3>Ingrédients:</h3>
          <ul className='list-ingredients'>
            {currentRecipe.ingredients.map((ingredient)=>
              <li key={ingredient.id}>
                {ingredient.name}
                {ingredient.quantity}
                {ingredient.unit}
              </li>
            )}
          </ul>
          <p>Description: {currentRecipe.description}</p>
          <button onClick={handleDelete}>Supprimer la Recette</button>
        </div>
      ) : (
        <p>Recette introuvable</p>
      )}
    </div>
  );
}

export default Recipe;