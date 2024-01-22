import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Ma Bibliothèque de Recettes</h1>
      <nav>
        <ul className="navigation">
          <Link className="accueil" to="/"  style={{textDecoration:'none'}}>Accueil</Link>
          <Link className="ajoutRecette" to="/add"  style={{textDecoration:'none'}}>Ajouter une Recette</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;