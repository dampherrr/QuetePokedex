import React from 'react';
import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon }) => {
    return (
        <figure>
            <img src={pokemon.url} alt={pokemon.name} />
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
})
}


export default PokemonCard;
