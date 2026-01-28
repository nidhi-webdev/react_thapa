import { useState } from "react"

const TodoForm = ({ handleFormSubmitPassing }) => {
    const [inputValue, setinputValue] = useState("")



    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleFormSubmitPassing(inputValue)
        setinputValue('')
    }

      const handleInputChange = (userInputValue) => {
        setinputValue(userInputValue)
    }

    return (
        <section className=' '>
            <form className='flex font-[1.8rem] mx-14 p-3' onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    className='bg-[#f2f3f4] p-2.5 font-[1.8rem] rounded-l-2xl rounded-r-none outline-none flex-1'
                    onChange={(e) => handleInputChange(e.target.value)} value={inputValue}
                />
                <button
                    type="submit"
                    className='p-2.5 text-white text-[17px] rounded-l-none rounded-r-2xl min-w-30 bg-[#5dade2] hover:bg-amber-300 cursor-pointer'

                >
                    Add Task
                </button>
            </form>
        </section>
    )
}

export default TodoForm
