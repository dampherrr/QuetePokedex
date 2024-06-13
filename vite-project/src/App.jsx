/* eslint-disable no-unused-vars */
import PokemonCard from './components/PokemonCard';
// import "./App.css";
import React, { useState } from 'react';

const App = () => {
    const pokemonList = [
        { name: "bulbasaur", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
        { name: "ivysaur", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" },
        { name: "venusaur", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" },
        { name: "charmander", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
        { name: "charmeleon", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" },
        { name: "charizard", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
        { name: "mew", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png" }
    ];

    const [pokemonIndex, setPokemonIndex] = useState(0);

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
        <div>
            <PokemonCard pokemon={pokemonList[pokemonIndex]} />
            <button onClick={previousPokemon} disabled={pokemonIndex === 0}>
                Précédent
            </button>
            <button onClick={nextPokemon} disabled={pokemonIndex === pokemonList.length - 1}>
                Suivant
            </button>
        </div>
    );
}

export default App;

