import { useEffect, useState } from "react"
import TodoForm from './TodoForm'
import TodoList from './TodoList'


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
             
                    {
                        task.map((curTask, index) => {
                            return <TodoList data={curTask} key={index} handleDeletePassing={handleDelete} />


                        })
                    }
                
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
