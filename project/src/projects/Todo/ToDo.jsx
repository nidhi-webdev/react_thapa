import React from 'react'

const ToDo = () => {
    return (
        <div className='p-[3%] items-center flex flex-col min-h-screen bg-[linear-gradient(100deg,#001214,#001f29)] overflow-hidden transition-all duration-300 ease-linear'>
            <header className='flex flex-col items-center justify-around text-5xl min-h-[25vh]'>
                <h1 className='font-bold text-2xl text-white'> Todo List </h1>
            </header>
            <section className=' '>
                <form className='flex font-[1.8rem]  mx-14 p-3 '>
                    <div>
                        <input type="text" autoComplete="off" className='bg-[linear-gradient(100deg,#f2f3f4)] p-2.5 font-[1.8rem] rounded-2xl' />
                    </div>

                    <button type="submit" className='p-2.5 text-white text-[17px] rounded-tr-[15px] rounded-br-[15px] min-w-[25 bg-[#5dade2]'> Add Task </button>
                </form>
            </section>
        </div>
    )
}

export default ToDo
