import './App.css'
import PokemonCard from './components/PokemonCard'
import { getPokemonIdFromUrl, getPokemonImgUrl } from "./api/pokemonApi"
import { useEffect, useState } from 'react'

type PokemonListItem = {
  name: string
  url: string
}

function App() {
  const [pokemon, setPokemon] = useState<PokemonListItem[]>([])

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      const data = await response.json()
      setPokemon(data.results)
    }
    fetchPokemon()
  }, [])  

  return (
    <section className="pokedex">
      <div className="pokedex-container">
        <h1 className="pokedex-title">Who's that Pokemon?</h1>
        <div className="pokemon-grid">
          {pokemon.map((pokemon) => {
            const id = getPokemonIdFromUrl(pokemon.url)
            const image = getPokemonImgUrl(id)
            return (
            <PokemonCard
              key = {id}
              name = {pokemon.name}
              number = {id}
              image = {image}
            />
          )})}
        </div>
      </div>
    </section>
  )
}

export default App
