import './App.css'
import PokemonCard from './components/PokemonCard'
import { getPokemonIdFromUrl, getPokemonImgUrl } from "./api/pokemonApi"
import { useEffect, useState } from 'react'

type PokemonListItem = {
  name: string
  url: string
}

type SelectedPokemon = {
  name: string
  number: number
  image: string
}

function App() {
  const [pokemon, setPokemon] = useState<PokemonListItem[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<SelectedPokemon | null>(null)

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      const data = await response.json()
      setPokemon(data.results)
    }
    fetchPokemon()
  }, [])  

  console.log(selectedPokemon)

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
              onClick = {() => {
                console.log("geklikt", pokemon.name)
                setSelectedPokemon({
                  name: pokemon.name, 
                  number: id, 
                  image: image})
              }}
            />
          )})}
        </div>  

          {selectedPokemon && (
            <div className = "overlay" onClick= {() => setSelectedPokemon(null)}>
              <div className = "overlay-card" onClick= {(e) => e.stopPropagation()}>
                <img src={selectedPokemon.image} alt={selectedPokemon.name} />
                <h2>{selectedPokemon.name}</h2>
                <p>#{selectedPokemon.number.toString().padStart(4, "0")}</p>
              </div>
            </div>
          )}
      </div>
    </section>
  )
}

export default App
