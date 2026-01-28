import { useEffect, useState } from "react";

const TododateTime = () => {
    const [dateTime, setDateTime] = useState("")

 // Date and Time 
    useEffect(() => {
        const Interval = setInterval(() => {
            const date = new Date()
            const formateDate = date.toLocaleDateString()
            const formateTime = date.toLocaleTimeString()
            setDateTime(`${formateDate} - ${formateTime}`)
        }, 1000);
        return () => clearInterval(Interval)

    }, [])

  return (
    <div>
       <h2 className="text-white font-[3rem]"> {dateTime} </h2>
    </div>
  )
}

export default TododateTime
