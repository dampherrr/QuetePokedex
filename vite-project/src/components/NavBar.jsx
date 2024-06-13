import React from 'react';
import PropTypes from 'prop-types';

const NavBarComponent = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {

    const nextPokemon = () => {
        if (pokemonIndex < pokemonList.length - 1) {
            setPokemonIndex(pokemonIndex + 1);
        }
    };

    const previousPokemon = () => {
        if (pokemonIndex > 0) {
            setPokemonIndex(pokemonIndex - 1);
        }
    };

    return (
        <>
            <button onClick={previousPokemon} disabled={pokemonIndex === 0}>
                Précédent
            </button>
            <button onClick={nextPokemon} disabled={pokemonIndex === pokemonList.length - 1}>
                Suivant
            </button>
        </>
    );
};

NavBarComponent.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonList: PropTypes.array.isRequired
};

export default NavBarComponent;
