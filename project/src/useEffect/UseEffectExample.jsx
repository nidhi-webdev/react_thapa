import { useState } from "react"



const UseEffectExample = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    return (

        <div className="flex justify-center items-center min-h-screen flex-col gap-y-4 bg-[#061935]">

            <h1 className="font-medium text-white text-2xl"> Use Effect Challenge </h1>
            <p className="text-white"> Count: {count} </p>

            <button onClick={() => setCount(count + 1)}
                className="bg-green-600 px-4 py-3 rounded text-white cursor-pointer"> Increment </button>

            <p className="text-white"> Name: {name}  </p>

            <input className="bg-white px-4 py-3 rounded" />
        </div>
    )
}

export default UseEffectExample
