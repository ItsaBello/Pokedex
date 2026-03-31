import './App.css'
import PokemonCard from './components/PokemonCard'
import { getPokemonIdFromUrl, getPokemonImgUrl } from "./api/pokemonApi"

function App() {
  
  const url = "https://pokeapi.co/api/v2/pokemon/1/"
  const id = getPokemonIdFromUrl(url)
  const image = getPokemonImgUrl(id)
  
  const pokemon = [
    {
      name: "Bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      name: "Ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      name: "Venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/"
    }
  ]

  return (
    <section>
      <div>
        <h1>Who's that Pokemon?</h1>
        {pokemon.map((pokemon) => {
          const id = getPokemonIdFromUrl(pokemon.url)
          const image = getPokemonImgUrl(id)

          return <PokemonCard
            key={id}
            name={pokemon.name}
            number={id}
            image={image}
          />
        })}
      </div>
    </section>
  )
}

export default App
