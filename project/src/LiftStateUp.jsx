import { useState } from "react"



export const LiftStateUp = () => {
    return (
        <div className="absolute top-[50%] left-[45%]">
            <InputComponent />
            <DisplayComponent />
        </div>
    )
}


// 1st child Component
export const InputComponent = () => {
    const [inputValue, setInputValue] = useState("")

    return (
        <>
            <input type="text" placeholder="Enter Your Name" value={inputValue} 
            className="border-blue-500 border-2 p-4 mb-5"
            onChange={(e) => setInputValue(e.target.value) }
            
            />
        </>
    )

}

// 2nd child Component 
export const DisplayComponent = () => {
    return <p> The Current input value is: </p>

}


