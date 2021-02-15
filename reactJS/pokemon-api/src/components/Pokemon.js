import React from "react";

/* craemos un pure component que solo cambia estado basado en los props que se le pasan */

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-img"/>
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div># {pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, indx) => {
            return <div key={indx} className="pokemon-type-text">{type.type.name}</div>
          })}
          </div>
          <div className="pokemon-favorite">♥</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;