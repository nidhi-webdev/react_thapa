import { useEffect, useState } from "react"



const UseEffectExample = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [])



    return (

        <div className="flex justify-center items-center min-h-screen flex-col gap-y-4 bg-[#061935] font-2xl">

            <h1 className="font-medium text-white text-2xl"> Use Effect Example </h1>
            <p className="text-white"> My Subscribers on Youtube </p>
            <div className="text-white">  {count} </div>
            <h3 className="text-white"> Subscribers <br /> Realtime Counter </h3>

        </div>
    )
}

export default UseEffectExample
