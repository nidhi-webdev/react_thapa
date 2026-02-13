import { useEffect, useState } from "react"

const HowNotToFetchApi = () => {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    console.log(pokemon)

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    const fetchPokemon = () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setError(error)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    if (loading) {
        return <h1 className="font-bold "> Loading... </h1>
    }

    if (error) {
        return <h1> Error: {error.message} </h1>
    }


    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-[#f6f7fb] py-8">
            <h1 className="text-5xl font-extrabold text-black mb-8 text-center">Lets Catch Pokémon</h1>

            <div className="relative w-100 h-87 bg-white rounded-md shadow-xl flex flex-col items-center justify-center">
                {/* Ellipse/oval at the top */}
                <svg
                    className="absolute top-0 left-0"
                    width="100%"
                    height="120"
                    viewBox="0 0 400 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <ellipse cx="200" cy="60" rx="190" ry="50" fill="#eafcf3" />
                </svg>
                <img className="relative z-10"
                    src={pokemon.sprites?.other?.dream_world?.front_default} alt="pokemon-img" />
                <h1 className="text-5xl font-extrabold text-black text-center capitalize mt-4"> {pokemon.name} </h1>
                <div>
                    <p>
                        Height: <span>{pokemon.height} </span>
                    </p>
                    <p>
                        Weight: <span>{pokemon.weight} </span>
                    </p>
                    <p>
                        Weight: <span>{pokemon.stats[5].base_stat} </span>
                    </p>
                </div>
            </div>

        </div>
    )


}

export default HowNotToFetchApi
