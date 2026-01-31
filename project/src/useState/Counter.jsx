import { useState } from "react"

const Counter = () => {
    const [first, setfirst] = useState("")

  return (
    <div className="flex items-center justify-center flex-col mt-10">
      <h1 className="font-bold text-4xl"> Usestate Hooks </h1>
      <br />
      <p className="mb-4"> Count </p>
      <button className="bg-black px-4 py-2 text-white"> Increment  </button>
    </div>
  )
}

export default Counter
