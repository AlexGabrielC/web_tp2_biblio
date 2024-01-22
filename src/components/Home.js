import React from 'react';
import { Link } from 'react-router-dom';

function Home({ recipes }) {
  

  return (
    <div>
      <h2>Recettes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} style={{textDecoration:'none'}}>
            <div key={recipe.id} className="recipe-box">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;