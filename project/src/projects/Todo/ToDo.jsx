import { useState } from "react"
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TododateTime from './TododateTime'


const ToDo = () => {

    const [task, setTask] = useState([])


    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue
        // To check if the empty field is empty or not 
        if (!content) return;

        // to check the data is alreday existing or not 
        const ifTodoContentMatch = task.find((curTask) => curTask.content === content)
        if (ifTodoContentMatch) return

        setTask((prevValue) => [...prevValue, { id, content, checked }])
    }


    // Delete 
    const handleDelete = (curTaskvalue) => {
        console.log("From ToDo", curTaskvalue);

        const updatedTask = task.filter((item) => item.content !== curTaskvalue);
        setTask(updatedTask)
    }

    // Delete All
    const handleDeleteAll = () => {
        setTask([])
    }

    // Checked Todo
    const handleCheckedTodo = () => {
        console.log("Hey form Checked ")
    }


    return (
        <div className='p-[3%] items-center flex flex-col min-h-screen bg-[linear-gradient(100deg,#001214,#001f29)] overflow-hidden transition-all duration-300 ease-linear'>
            <header className='flex flex-col items-center justify-around  min-h-[25vh]'>
                <h1 className='font-bold text-2xl text-white'> Todo List </h1>
                <TododateTime />
            </header>
            <TodoForm handleFormSubmitPassing={handleFormSubmit} handleCheckedTodoPassing={handleCheckedTodo} />

            <section>

                {
                    task.map((curTask) => {
                        return <TodoList data={curTask.content} key={curTask.id} checked={curTask.checked} handleDeletePassing={handleDelete} />


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
