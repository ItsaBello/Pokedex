import './PokemonCard.css'

type PokemonCardProps = {
    name: string
    number: number
    image: string
}

function PokemonCard(props: PokemonCardProps) {
    return (
        <section className = "pokemon-card">
            <div className= "pokemon-card-content">
                <h2>{props.name}</h2>
                <p>#{props.number.toString().padStart(4, "0")}</p>
                <img src={props.image} alt={props.name} />
            </div>
        </section>
    )
}

export default PokemonCard;