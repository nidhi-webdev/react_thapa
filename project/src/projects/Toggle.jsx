import { useState } from "react"

const Toggle = () => {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn(!isOn)

  }

  const checkIsOn = isOn ? "on" : "Off";
  const toggleBgColor =  {background: isOn ? "#4caf50" : "#f44336"}

  return (
    <div className='bg-gray-500 p-10 w-60 m-10 rounded-full' onClick={handleToggle} style={toggleBgColor }>
      <div className={` w-20 h-20 rounded-full flex items-center justify-center text-white font-bold cursor-pointer border-amber-100 border-2 ${checkIsOn}`}>
        <span> {checkIsOn} </span>
      </div>
    </div>


  )
}

export default Toggle
