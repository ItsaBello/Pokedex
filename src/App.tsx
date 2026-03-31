import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
const pokemon = [
  {
    name: "Bulbasaur",
    number: 1,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    name: "Ivysaur",
    number: 2,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    name: "Venusaur",
    number: 3,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  }
]

  return (
    <section>
      <div>
        <h1>Who's that Pokemon?</h1>
        {pokemon.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            number={pokemon.number}
            image={pokemon.image}
          />
        ))}
      </div>
    </section>
  )
}

export default App
