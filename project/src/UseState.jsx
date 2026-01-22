import { useState } from "react"


const UseStateComponent = () => {
const [count, setCount] = useState(0)


  return (
    <div>
      <button className="bg-emerald-600 absolute left-[45%] top-[50%] px-4 py-2 rounded"> Increment </button>
    </div>
  )
}

export default UseStateComponent
