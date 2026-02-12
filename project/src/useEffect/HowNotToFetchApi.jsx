import { useEffect, useState } from "react"

const HowNotToFetchApi = () => {
    const [apiData, setApiData] = useState([])

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    const fetchPokemon = () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setApiData(data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchPokemon()
    }, [])


    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-[#f6f7fb] py-8">
            <h1 className="text-5xl font-extrabold text-black mb-8 text-center">Lets Catch Pokémon</h1>
          
          <div className="relative w-100 h-87.5 bg-white rounded-md shadow-xl flex items-center justify-center">
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
                {/* You can add Pokémon image or info here */}
            </div>
        </div>
    )
}

export default HowNotToFetchApi
