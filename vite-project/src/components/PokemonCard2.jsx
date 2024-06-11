import React, { useState } from 'react';

const pokemonList = [
    {
        number: "#01",
        name: "bulbizarre",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        type: "plant",
    },
    {
        number: "#02",
        name: "herbizarre",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        type: "plant",
    },
    {
        number: "#03",
        name: "florizarre",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
        type: "plant",
    },
    {
        number: "#04",
        name: "salamèche",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        type: "fire",
    },
    {
        number: "#05",
        name: "réptincel",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
        type: "fire",
    },
    {
        number: "#06",
        name: "dracaufeu",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        type: "fire",
    },
    {
        number: "#07",
        name: "carapuce",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        type: "water",
    },
    {
        number: "#08",
        name: "carabaffe",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
        type: "water",
    },
    {
        number: "#09",
        name: "tortank",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
        type: "water",
    },
    {
        number: "#10",
        name: "chenipan",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
        type: "insect",
    },
    {
        number: "#11",
        name: "chrysacier",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
        type: "insect",
    },
    {
        number: "#12",
        name: "papilusion",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
        type: "insect",
    },
    {
        number: "#13",
        name: "aspicot",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
        type: "insect",
    },
    {
        number: "#25",
        name: "pikachu",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        type: "electrik",
    },
    {
        number: "#151",
        name: "mew",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
        type: "psy",
    },
];

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const getBackgroundColor = (type) => {
    switch (type) {
        case 'plant':
            return 'green';
        case 'fire':
            return 'red';
        case 'water':
            return 'blue';
        case 'insect':
            return 'lightgreen';
        case 'electrik':
            return 'yellow';
        case 'psy':
            return 'lightpink';
        default:
            return 'lightgray';
    }
};


const PokemonCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pokemon = pokemonList[currentIndex];


    const nextPokemon = () => {
        setCurrentIndex((currentIndex + 1) % pokemonList.length);
    };
    const backgroundColor = getBackgroundColor(pokemon.type);
    return (
        <div className="backcolor">
        <div className="pokemon-card" style={{ backgroundColor }}>
            <h1 className="pokemon-number">{pokemon.number}</h1>
            <h1 className="pokemon-name">{capitalizeFirstLetter(pokemon.name)}</h1>
            {pokemon.imgSrc ? (
                <img className="pokemon-img" src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p className="pokemon-missing-img">???</p>
            )}
            <button onClick={nextPokemon}>Suivant</button>
        </div>
        </div>
    );
};

export default PokemonCard;
