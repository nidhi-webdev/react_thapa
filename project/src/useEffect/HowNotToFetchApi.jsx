import { useEffect, useState } from "react"

const HowNotToFetchApi = () => {
    const [pokemon, setPokemon] = useState([])

    console.log(pokemon)

    const API = "https://pokeapi.co/api/v2/pokemon/squirtle"

    const fetchPokemon = () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    if (pokemon) {
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
                </div>

            </div>
        )
    }

}

export default HowNotToFetchApi
