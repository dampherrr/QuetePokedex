import React from 'react';

const PokemonCard = ({ pokemon }) => {
    return (
        <figure>
            <img src={pokemon.url} alt={pokemon.name} />
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

export default PokemonCard;
