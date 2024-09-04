import '../Pokemon.css';

export default function Pokemon({pokemon}) {
  return (
    <div className="pokemon">
        <h3>{pokemon.name}</h3>
        <a href={pokemon.url}>More Info</a>
    </div>
  )
}
