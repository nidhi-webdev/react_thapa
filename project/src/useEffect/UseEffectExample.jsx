import { useState } from "react"



const UseEffectExample = () => {
    const [count, setCount] = useState(0)

  return (
    // <div></div>
    <div className="flex justify-center items-center min-h-screen flex-col gap-y-4 bg-[#061935]">

      <h1 className="font-extrabold  text-white"> Use Effect Challenge </h1>
      <p className="text-white"> Count: {count} </p>

      <button className="bg-green-600 px-4 py-3 rounded text-white"> Increment </button>

      <p className="text-white"> Name: </p>

      <input className="bg-white px-4 py-3 rounded"/>
    </div>
  )
}

export default UseEffectExample
