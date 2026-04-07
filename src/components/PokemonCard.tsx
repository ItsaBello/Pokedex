import './PokemonCard.css'

type PokemonCardProps = {
    name: string
    number: number
    image: string
    onClick: () => void
}

function PokemonCard(props: PokemonCardProps) {
    
    return (
        <section className = "pokemon-card" onClick={props.onClick}>
            <div className= "pokemon-card-content">
                <div>
                    <h2>{props.name}</h2>
                    <p>#{props.number.toString().padStart(4, "0")}</p>
                    <img src={props.image} alt={props.name} />
                </div>
            </div>
        </section>
    )
}

export default PokemonCard;