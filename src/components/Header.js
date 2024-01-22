import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Ma Bibliothèque de Recettes</h1>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/add">Ajouter une Recette</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;