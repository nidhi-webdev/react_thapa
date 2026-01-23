import { useState } from "react"



export const LiftStateUp = () => {
    const [inputValue, setInputValue] = useState("")

    return (
        <div className="absolute top-[50%] left-[45%]">
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </div>
    )
}


// 1st child Component
export const InputComponent = ({inputValue, setInputValue }) => {

    return (
        <>
            <input type="text" placeholder="Enter Your Name" 
                className="border-blue-500 border-2 p-4 mb-5"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}

            />
        </>
    )

}

// 2nd child Component 
export const DisplayComponent = ({inputValue}) => {

    console.log("From DisplayComponent", inputValue);


    return <p> The Current input value is: {inputValue} </p>

}


