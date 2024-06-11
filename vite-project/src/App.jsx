import PokemonCard from './components/PokemonCard';
// import "./App.css";


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

    return (
        <div>
            <PokemonCard pokemon={pokemonList[0]} />
        </div>
    );
}

export default App;


// function App() {
//   return (
//     <div>
//       <PokemonCard />
//     </div>
//   );
// }

// export default App;
