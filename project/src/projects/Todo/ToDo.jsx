import { useEffect, useState } from "react"
import { MdCheck, MdDeleteForever } from "react-icons/md";
import TodoForm from './TodoForm'


const ToDo = () => {
    
    const [task, setTask] = useState([])
    const [dateTime, setDateTime] = useState("")

    const handleFormSubmit = (inputValue) => {
            
            if (!inputValue) return;
    
            if (task.includes(inputValue)) {
                return
            }
    
            setTask((prevValue) => [...prevValue, inputValue])
            
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

    // Delete All
    const handleDeleteAll = () => {
       setTask([])
    }


    return (
        <div className='p-[3%] items-center flex flex-col min-h-screen bg-[linear-gradient(100deg,#001214,#001f29)] overflow-hidden transition-all duration-300 ease-linear'>
            <header className='flex flex-col items-center justify-around  min-h-[25vh]'>
                <h1 className='font-bold text-2xl text-white'> Todo List </h1>
                <h2 className="text-white font-[3rem]"> {dateTime} </h2>
            </header>
            <TodoForm handleFormSubmitPassing = {handleFormSubmit} />

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

            {/* For clear All */}
            <section>
                <button onClick={handleDeleteAll} 
                className="bg-red-500 px-4 py-2 text-white rounded cursor-pointer hover:bg-red-700 font-bold"> Clear All </button>
            </section>
        </div>
    )
}

export default ToDo
