import { useState } from "react"


const ShortCircuit = () => {
    const [isloggedIn, setIsloggedIn] = useState(true)
    const [user, setUser] = useState("")




    return (
        <div className=' mt-10 '>
            <div className='font-bold text-4xl mb-10 flex items-center justify-center'>
                <h1> Welcome to the ShortCircuit Evaluation !</h1>
            </div>

            <div className='ml-24'>
                {isloggedIn && <p className='mb-5 text-xl'> You are logged in!</p>}
               <div className="mb-2"> {user ? `Hello ${user}` : "Please log In"} </div>
                <button onClick={() => setIsloggedIn(!isloggedIn)}
                    className='bg-black px-36 py-2 text-white mr-3 cursor-pointer'> Toggle Login State </button>

                
                <button onClick={() => setUser("Nidhi")}
                    className='bg-black px-36 py-2 text-white mr-3 cursor-pointer'> Set User </button>

                <button onClick={() => setUser("")}
                className='bg-black px-36 py-2 text-white mr-3 cursor-pointer '> Clear User </button>

            </div>
        </div>
    )
}

export default ShortCircuit
