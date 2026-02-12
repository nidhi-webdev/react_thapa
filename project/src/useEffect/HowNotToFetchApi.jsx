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
        <div>
           <header> 
            <h1> Lets catch Pokemon </h1>
           </header>
           <ul>
            <li> 
                <figure></figure>
            </li>
           </ul>
        </div>
    )
}

export default HowNotToFetchApi
