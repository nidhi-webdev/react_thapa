import { useState } from "react"



export const LiftStateUp = () => {
    return (
        <>
            <InputComponent />
            <DisplayComponent />
        </>
    )
}

export const InputComponent = () => {
    const [inputValue, setInputValue] = useState("")

    return (
        <>
            <input type="text" placeholder="Enter Your Name" value={inputValue} />
        </>
    )

}


export const DisplayComponent = () => {
    return <p> The Current input value is: </p>

}


