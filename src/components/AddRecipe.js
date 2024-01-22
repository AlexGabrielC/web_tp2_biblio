import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipe({ addRecipe }) {
  const navigate = useNavigate();

  const [newRecipe, setNewRecipe] = useState({
    id: crypto.randomUUID(),
    image: '',
    title: '',
    time: '',
    description: '',
    ingredients:['']
  });

  const [ingredients, setIngredients] = useState([{
      id: crypto.randomUUID(),
      name: '',
      quantity: 0,
      unit: ''
    }]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe(prevState => ({ ...prevState, [name]: value }));
    setNewRecipe(prevState => ({ ...prevState, ingredients: ingredients}))
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setNewRecipe(prevState => ({ ...prevState, image: URL.createObjectURL(image) }))
  }

  const handleChangeIngredient = (e) => {
    const { name, value, id } = e.target;
    setIngredients(ingredients.map(ig => ig.id === id ? {...ig, [name]:value} : {...ig}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ingredients)
    addRecipe(newRecipe);
    navigate('/');
  };

  const addOneIngredient = () => {
    setIngredients([...ingredients,{id: crypto.randomUUID(),name: '',quantity: 0,unit: ''}]);
  }
  

  const deleteIngredient = (i) => {
    setIngredients(ingredients.filter(t => t.id !== i));
  }

  return (
    <div>
      <h2>Ajouter une Recette</h2>
      <form className="form" onSubmit={handleSubmit}> 
        <div>
          <button className="leBouttonCool" type="submit">Ajouter la Recette</button>
        </div> 
        <input
          type="file"
          name='image'
          onChange={handleImageChange}
          accept="image/png, image/jpg"
        />
        {newRecipe.image && <img src={newRecipe.image} alt="preview" />}
        <input
          name="title"
          value={newRecipe.title}
          onChange={handleChange}
          type='text'
          placeholder={'titre de la recette'}
          required
        />
        <input
          name="time"
          value={newRecipe.time}
          onChange={handleChange}
          type='time'
          list="popularHours"
          required
        />
        <datalist id="popularHours">
          <option value="01:00"></option>
          <option value="02:00"></option>
          <option value="03:00"></option>
        </datalist>
        <textarea
          name="description"
          value={newRecipe.description}
          onChange={handleChange}
          type='textarea'
          placeholder='description de la recette'
          required >
        </textarea>
        </form>
        <div className="formIngredient">
        <h4>ingredients</h4>

        {ingredients.map((ig) => (
          <div className="formIngredients" key={ig.id}>
            <input
              name="name"
              id={ig.id}
              type="text"
              placeholder="nom de l'ingredient"
              value={ig.name}
              onChange={handleChangeIngredient}
            />
            <input
              name="quantity"
              id={ig.id}
              type="number"
              placeholder='quantité'
              value={ig.quantity}
              onChange={handleChangeIngredient}
            />
            <select
              name="unit"
              id={ig.id}
              value={ig.unit}
              onChange={handleChangeIngredient}
              label="unité"
            >
              <option>u</option>
              <option>ml</option>
              <option>gr</option>
            </select>
            <button onClick={() => { deleteIngredient(ig.id)}}>
              supprimer ingredient
            </button>
          </div>
        ))}      
        <input className='petitIngredient' value="Ajouter un ingredient" type="button" onClick={addOneIngredient} />
    </div>
    </div>
  );
}

export default AddRecipe;