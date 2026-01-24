import React from 'react'

const ToDo = () => {
  return (
   <section>
    <header>
        <h1> Todo List </h1>
    </header>
    <section>
        <form>
            <div> 
                <imput type="text" autocomplete="off" />
            </div>

            <div type="submit"> Add Task </div>
        </form>
    </section>
   </section>
  )
}

export default ToDo
