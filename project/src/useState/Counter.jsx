import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

     const handleDecrement = () => {
        setCount(count - 1)
    }

     const handleReset = () => {
        setCount(0)
    }
    
    

    return (
        <div className="flex items-center justify-center flex-col mt-10">
            <h1 className="font-bold text-4xl"> Usestate Hooks </h1>
            <br />
            <p className="mb-4 text-2xl"> Count : {count} </p>
            <div className="mb-5"> Step: <input type="text" className="border-green-800 border-2 rounded" /> </div>
            <div className="">
                <button onClick={handleIncrement}
                    className="bg-black px-6 py-3 text-white rounded cursor-pointer mr-5   "> Increment  </button>
                <button onClick={handleDecrement}
                    className="bg-black px-6 py-3 text-white rounded cursor-pointer mr-5"> Decrement  </button>
                <button onClick={handleReset}
                    className="bg-black px-6 py-3 text-white rounded cursor-pointer mr-5"> Reset  </button>
            </div>

        </div>
    )
}

export default Counter
