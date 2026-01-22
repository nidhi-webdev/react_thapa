import { useState } from "react"


const UseStateComponent = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
        
    }

    return (
        <div className="absolute left-[45%] top-[50%]">
            <h1 className="text-3xl"> {count} </h1>
            <button className="bg-emerald-600  px-4 py-2 rounded" onClick={increment}> Increment </button>
        </div>
    )
}

export default UseStateComponent
