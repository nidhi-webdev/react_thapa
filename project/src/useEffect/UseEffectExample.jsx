import { useState } from "react"



const UseEffectExample = () => {
    const [count, setCount] = useState(0)

  return (
    // <div></div>
    <div className="flex justify-center items-center min-h-screen flex-col gap-y-4 bg-blue">

      <h1 className="font-extrabold"> Use Effect Challenge </h1>
      <p> Count: {count} </p>

      <button className="bg-green-600 px-4 py-3 rounded"> Increment </button>

      <p> Name: </p>

      <input className="border border-"/>
    </div>
  )
}

export default UseEffectExample
