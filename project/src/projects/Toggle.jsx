import { useState } from "react"

const Toggle = () => {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn(!isOn)

  }

  return (
    <div className='bg-gray-500 p-10 w-60 m-10 rounded-full' onClick={handleToggle}>
      <div className={`bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold cursor-pointer ${isOn ? "on" : "off"}`}>
       <span> {isOn ? "ON" : "OFF"} </span>
      </div>
    </div>


  )
}

export default Toggle
