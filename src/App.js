import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import Recipe from './components/Recipe';
import './index.css'

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
  }, []);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (recipeId) => {
    setRecipes(recipes.filter(r => r.id !== recipeId));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route path="/add" element={<AddRecipe addRecipe={addRecipe} />} />
          <Route path="/recipe/:id" element={<Recipe recipes={recipes} deleteRecipe={deleteRecipe} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;