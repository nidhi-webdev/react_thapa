import { useEffect, useState } from "react"
import { MdCheck, MdDeleteForever } from "react-icons/md";


const ToDo = () => {
    const [inputVlaue, setInputVlaue] = useState("")
    const [task, setTask] = useState([])
    const [dateTime, setDateTime] = useState("")

    const handleInputChange = (userInputValue) => {
        setInputVlaue(userInputValue)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (!inputVlaue) return;

        if (task.includes(inputVlaue)) {
            setInputVlaue('')
            return
        }

        setTask((prevValue) => [...prevValue, inputVlaue])
        setInputVlaue('')
    }

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

    // Delete 
    const handleDelete = (curTaskvalue) => {
        const updatedTask = task.filter((item) => item !== curTaskvalue);
        setTask(updatedTask)
    }


    return (
        <div className='p-[3%] items-center flex flex-col min-h-screen bg-[linear-gradient(100deg,#001214,#001f29)] overflow-hidden transition-all duration-300 ease-linear'>
            <header className='flex flex-col items-center justify-around  min-h-[25vh]'>
                <h1 className='font-bold text-2xl text-white'> Todo List </h1>
                <h2 className="text-white font-[3rem]"> {dateTime} </h2>
            </header>
            <section className=' '>
                <form className='flex font-[1.8rem] mx-14 p-3' onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        autoComplete="off"
                        className='bg-[#f2f3f4] p-2.5 font-[1.8rem] rounded-l-2xl rounded-r-none outline-none flex-1'
                        onChange={(e) => handleInputChange(e.target.value)} value={inputVlaue}
                    />
                    <button
                        type="submit"
                        className='p-2.5 text-white text-[17px] rounded-l-none rounded-r-2xl min-w-30 bg-[#5dade2] hover:bg-amber-300 cursor-pointer'

                    >
                        Add Task
                    </button>
                </form>
            </section>

            <section>
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <li
                                key={index}
                                className="
    m-[2.4rem]
    text-[20px]
    text-black
    rounded-full
    transition-colors duration-200 ease-in-out
    bg-[#f2f3f4]
    min-w-80 max-w-100
    px-6 py-3
    grid grid-cols-[1fr_auto_auto]
    items-center
    gap-6
  "
                            >
                                {/* LEFT TEXT */}
                                <span className="font-bold self-center">
                                    {curTask}
                                </span>

                                {/* CHECK BUTTON */}
                                <button
                                    className="
      w-12 h-12
      flex items-center justify-center
      bg-green-600
      rounded-full
      text-white
      cursor-pointer
      shadow-[0_8px_24px_rgba(149,157,165,0.2)]
    "
                                >
                                    <MdCheck size={26} />
                                </button>

                                {/* DELETE BUTTON */}
                                <button onClick={() => handleDelete(curTask)}
                                    className="
      w-12 h-12
      flex items-center justify-center
      bg-red-400
      rounded-full
      text-white
      cursor-pointer
      shadow-[0_8px_24px_rgba(149,157,165,0.2)]
    "
                                >
                                    <MdDeleteForever size={26} />
                                </button>
                            </li>



                        })
                    }
                </ul>
            </section>
        </div>
    )
}

export default ToDo
