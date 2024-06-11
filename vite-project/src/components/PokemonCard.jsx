import React, { useState } from 'react';

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        type: "plant",
    },
    {
        name: "mew",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
        type: "psy",
    },
];

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const PokemonCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pokemon = pokemonList[currentIndex];


    const nextPokemon = () => {
        setCurrentIndex((currentIndex + 1) % pokemonList.length);
    };

    return (
        <div className="pokemon-card">
            <h1 className="pokemon-name">{capitalizeFirstLetter(pokemon.name)}</h1>
            {pokemon.imgSrc ? (
                <img className="pokemon-img" src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p className="pokemon-missing-img">???</p>
            )}
            <button onClick={nextPokemon}>Suivant</button>
        </div>
    );
};

export default PokemonCard;
